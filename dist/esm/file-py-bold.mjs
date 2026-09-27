export const name="file-py-bold";
export const id="dl_c7a5c9b125524330834c";
export const url=new URL("../icons/file-py-bold.svg?v=2af2c706b070359f46128dbc54f464f6f4318805363972205272b4ff8bd43ee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
