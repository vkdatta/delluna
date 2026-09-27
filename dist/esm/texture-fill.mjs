export const name="texture-fill";
export const id="dl_810a1a205baa5ad6711a";
export const url=new URL("../icons/texture-fill.svg?v=252bb79d60bdad4e3a94b5aec1eb3d73d8034c75b54ab2c95d345f1b27c9e00d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
