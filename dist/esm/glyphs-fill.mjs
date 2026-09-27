export const name="glyphs-fill";
export const id="dl_5d15f85896a51fe644fc";
export const url=new URL("../icons/glyphs-fill.svg?v=95d5ac9ee2e17fc2a973a38ef9ad29f40c74be2a15b2869b4d4356fdcf128275",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
