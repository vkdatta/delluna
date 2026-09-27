export const name="view_list";
export const id="dl_c75b19f70cdb7b36c38d";
export const url=new URL("../icons/view_list.svg?v=d8ec2f17687ba9690edbe8329b955ac6e695cd1bded832465ff064f8248df86c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
