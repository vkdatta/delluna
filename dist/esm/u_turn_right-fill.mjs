export const name="u_turn_right-fill";
export const id="dl_ad68f6536dde4010a97c";
export const url=new URL("../icons/u_turn_right-fill.svg?v=b770caea193fdc97e06abf5213fc532675f46b7c5d87923d3de01dfe9f1a45b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
