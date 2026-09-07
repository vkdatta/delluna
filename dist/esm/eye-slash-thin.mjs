export const name="eye-slash-thin";
export const id="dl_35dbfe812e3d40d5a090";
export const url=new URL("../icons/eye-slash-thin.svg?v=fc757b8ada6646af1288f1026ff8f43560b63a6c0e810eb18fa663c0eb8d7d58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
