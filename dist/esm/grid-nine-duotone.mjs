export const name="grid-nine-duotone";
export const id="dl_1498d8b8a1b14e3e86a6";
export const url=new URL("../icons/grid-nine-duotone.svg?v=0afa76a6eaedbf849c4bc2348abc3a53d7d1de96facda74f666a5bca6ee620f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
