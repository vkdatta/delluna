export const name="compass-tool-bold";
export const id="dl_3bc5ac9cb51945c79c52";
export const url=new URL("../icons/compass-tool-bold.svg?v=79a9182a9314a6073b47f63886713c64fcbc41b6576a826e9275b7a0648a07c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
