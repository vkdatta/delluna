export const name="sidebar-fill";
export const id="dl_6764478b6fe24e40876a";
export const url=new URL("../icons/S/sidebar-fill.svg?v=bbda5fc2f197440a6b2ec838e9555dcd00d5cdf246d686d4a1753bce29fc2ef0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
