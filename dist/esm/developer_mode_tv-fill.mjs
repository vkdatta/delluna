export const name="developer_mode_tv-fill";
export const id="dl_6ff98cc6bcf4b817b654";
export const url=new URL("../icons/developer_mode_tv-fill.svg?v=7353ca19723fd013d287e98fcd720bec9880eda1c0506955927e3d73440d3844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
