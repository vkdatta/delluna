export const name="box-fill";
export const id="dl_5fffe16b7c5d121ed302";
export const url=new URL("../icons/box-fill.svg?v=5030e71617c3c7d118929543900d92c7f847a79fd42c1af2c3f5c160e946f7f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
