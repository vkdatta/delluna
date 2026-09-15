export const name="bottom_panel_open-fill";
export const id="dl_e165c016a27142c4ab05";
export const url=new URL("../icons/B/bottom_panel_open-fill.svg?v=8d82f384957e0f0eda53187be92fad96a4d12fb57b9e211ece5c783e67f6ebea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
