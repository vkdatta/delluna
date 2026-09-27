export const name="connected_tv";
export const id="dl_ff27ed7ffcb8d374f141";
export const url=new URL("../icons/connected_tv.svg?v=d3e0439745a0cc2432a325ebaa20dc3fa095d5747396b9e1f6bf9b8cc70d663a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
