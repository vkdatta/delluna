export const name="developer_mode_tv-fill";
export const id="dl_ec35d0bcc4f24e7eb29e";
export const url=new URL("../icons/developer_mode_tv-fill.svg?v=ff431143709be3ae5b09e78be49cbd3659513e3aa260ceb18db5ad00c5c8f347",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
