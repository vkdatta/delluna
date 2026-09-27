export const name="file-arrow-up";
export const id="dl_34d8291e9ff348d9951b";
export const url=new URL("../icons/file-arrow-up.svg?v=397eecf6908b1ae91bd312885e440f1b2bffd40452b1eacfbfd110f243bfdbf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
