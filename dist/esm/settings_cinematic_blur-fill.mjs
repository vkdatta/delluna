export const name="settings_cinematic_blur-fill";
export const id="dl_5adfe8579ff3253383f4";
export const url=new URL("../icons/settings_cinematic_blur-fill.svg?v=b5f361b5b8167305a18dfe2bb895ea0ba779b62c1287d3fa1602f7dc8b1b390f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
