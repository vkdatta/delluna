export const name="developer_mode_tv";
export const id="dl_e845b5e6f1af1daa3197";
export const url=new URL("../icons/developer_mode_tv.svg?v=bd30c4437ecac2f0a78e3e6eeb35ea8a6ce9cdb8e748848ebb9f00de8c2da27a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
