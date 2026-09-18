export const name="watch_screentime-fill";
export const id="dl_c7a20e56e21e407d9f7d";
export const url=new URL("../icons/W/watch_screentime-fill.svg?v=507532f223a058c88fd16ff1bb8fc63fc06862c90937c673b6d1f7efc72ce9d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
