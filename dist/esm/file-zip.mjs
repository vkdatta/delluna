export const name="file-zip";
export const id="dl_21dd07da9f404d9e99ec";
export const url=new URL("../icons/file-zip.svg?v=1ea3db1ea869d6d3c8a25df14fadabe5313965b0ae6e46784b5e7d4bf78d68ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
