export const name="bottom_drawer-fill";
export const id="dl_f47b1766d1334b41a345";
export const url=new URL("../icons/bottom_drawer-fill.svg?v=77c00c8240de9a38361ce249b51e34c880a8a2ca13c6eea73bc0724fb3d5d72b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
