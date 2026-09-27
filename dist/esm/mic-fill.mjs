export const name="mic-fill";
export const id="dl_ff1e00d034e4ad074631";
export const url=new URL("../icons/mic-fill.svg?v=847f85ae7e48a2d53483808927478d9187e1c0d1fc2bc2baa29427e970a54dfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
