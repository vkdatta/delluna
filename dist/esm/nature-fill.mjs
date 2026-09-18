export const name="nature-fill";
export const id="dl_12dde708ebec4fafa2e4";
export const url=new URL("../icons/nature-fill.svg?v=cd7e953e56f753f437bc3128209bae6ea8a5abceac3f4c152a456fdd9b23f52f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
