export const name="door_sliding";
export const id="dl_1f3ead0abc5bd4b4f1cc";
export const url=new URL("../icons/door_sliding.svg?v=7bda9b8abd3a141057a6196f5e05d8dba8753e59d0da49392aaf55d26a2969af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
