export const name="format_letter_spacing_wider";
export const id="dl_a02acf9f7d3e7d7740ad";
export const url=new URL("../icons/format_letter_spacing_wider.svg?v=8b0e96c5784cd780598b34904e2ae867cfedca7ca4d0f58ad43ba33bbc0754ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
