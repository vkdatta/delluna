export const name="center_focus_strong-fill";
export const id="dl_4ae6a5c760ea9b2e92c0";
export const url=new URL("../icons/center_focus_strong-fill.svg?v=44c1be02754dd534fdaa9305f2d3b85d29c8817c78a408e4410f736845c56afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
