export const name="train-regional-light";
export const id="dl_3f064ad2fef14a49b3e1";
export const url=new URL("../icons/train-regional-light.svg?v=9ede2c263d5d9e7b1e5d3332011700e67196a60710f88cadfe08b8571b2b0ccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
