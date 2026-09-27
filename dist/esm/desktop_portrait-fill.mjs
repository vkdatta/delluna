export const name="desktop_portrait-fill";
export const id="dl_b19805cbcc2c6a47999e";
export const url=new URL("../icons/desktop_portrait-fill.svg?v=6ef08527c7fa0679e568e50e07fb0898246708c01a6d7e9e461ea6bb5e3f36cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
