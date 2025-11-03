import { promises as fs } from "fs";
import path from "path";
import { load } from "cheerio";

// Configuration
const CONFIG = {
  inputDir: "./export",
  outputDir: "./../preview",
  svgDefaults: {
    width: "100%",
    height: "100%",
    preserveAspectRatio: "xMidYMid meet",
  },
};

async function processSvgFile(filePath, fileName) {
  const svgContent = await fs.readFile(filePath, "utf8");
  const $ = load(svgContent, { xmlMode: true });
  const svg = $("svg");

  // Normalize SVG attributes for browser display
  svg.attr(CONFIG.svgDefaults);

  // Add black background that scales with the SVG
  svg.prepend('<rect width="100%" height="100%" fill="black"/>');

  return $.xml();
}

async function processSvgFiles() {
  await fs.mkdir(CONFIG.outputDir, { recursive: true });

  const files = await fs.readdir(CONFIG.inputDir);
  const svgFiles = files.filter((file) => file.endsWith(".svg"));

  for (const file of svgFiles) {
    const inputPath = path.join(CONFIG.inputDir, file);
    const outputPath = path.join(CONFIG.outputDir, file);

    const processedSvg = await processSvgFile(inputPath, file);
    await fs.writeFile(outputPath, processedSvg, "utf8");

    console.log(`Processed: ${file}`);
  }

  console.log(`\nComplete! Processed ${svgFiles.length} file(s)`);
}

processSvgFiles().catch(console.error);
