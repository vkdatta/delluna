export const name="headphones-light";
export const id="dl_413e7b8ffeed43c88dc6";
export const url=new URL("../icons/headphones-light.svg?v=b0b4050fafeac4fc287ed26cf3aeab644c106300cc1d33d220d1f324a4eb1c0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
