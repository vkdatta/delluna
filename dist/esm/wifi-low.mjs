export const name="wifi-low";
export const id="dl_df332a72b32d47218109";
export const url=new URL("../icons/W/wifi-low.svg?v=cfd46f02d3e508c728213f6fb36bbee4bc05a05ac862e7fe4b7a671cb0a5f99d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
