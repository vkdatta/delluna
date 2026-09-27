export const name="triangle-duotone";
export const id="dl_c1b4dc58509fc62e5faf";
export const url=new URL("../icons/triangle-duotone.svg?v=8f400a4b8e6341b8ab6ad42a7b0da29e509dffcb362c2b59f8e2a73fc1f97f43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
