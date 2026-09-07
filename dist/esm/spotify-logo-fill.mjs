export const name="spotify-logo-fill";
export const id="dl_6ba8b89c1c7246928942";
export const url=new URL("../icons/S/spotify-logo-fill.svg?v=50360bee2998f48367780b6f1637d208169acb0d3384e27e145f29b456b73bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
