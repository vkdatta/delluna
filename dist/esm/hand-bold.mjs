export const name="hand-bold";
export const id="dl_033ee248b09d40b787d0";
export const url=new URL("../icons/hand-bold.svg?v=901ad6b152b237edf30c5713e0676f1cfd3142672e209b3efc3062b23836a62a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
