export const name="check_circle_unread-fill";
export const id="dl_a24e4f1e013c445f9c3e";
export const url=new URL("../icons/check_circle_unread-fill.svg?v=a977bb585fe27c9e3877cbd454d00beaa39ccf770bda6bab3bc558eef83fb7a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
