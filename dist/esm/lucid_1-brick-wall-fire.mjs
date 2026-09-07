export const name="lucid_1-brick-wall-fire";
export const id="dl_dfaa67c576f94eb1b15d";
export const url=new URL("../icons/lucid_1-brick-wall-fire.svg?v=91401a7e42b9ae78df0cc49ba1ab2d5eef6d77707a6a3e63bc41aa31aa3ba46f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
