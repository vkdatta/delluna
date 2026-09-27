export const name="lucid_3-shapes";
export const id="dl_8fccafaf263e49379859";
export const url=new URL("../icons/lucid_3-shapes.svg?v=cb863c2c0f5f1a6279b36d9dd24f84b3417bfb543804ff709742f73c14036b65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
