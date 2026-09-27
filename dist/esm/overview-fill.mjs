export const name="overview-fill";
export const id="dl_15045607c748f5048a6f";
export const url=new URL("../icons/overview-fill.svg?v=3911dce97b991aa274751407f7d33044f74ae4ac94194a775605763c6d383826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
