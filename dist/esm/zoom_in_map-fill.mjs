export const name="zoom_in_map-fill";
export const id="dl_fb66866fea1984e923a0";
export const url=new URL("../icons/zoom_in_map-fill.svg?v=7bb8fb7a450306e453a210e1796f573e5b1e1acdf5cd6f479688dbfbbd341aa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
