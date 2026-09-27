export const name="top_panel_close-fill";
export const id="dl_c8ac79c34124dc058298";
export const url=new URL("../icons/top_panel_close-fill.svg?v=cc4340790a19f14ecba77d50288ea86696a940214a1371a12a0bc379b35ee9c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
