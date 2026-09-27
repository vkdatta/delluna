export const name="lucid_3-shield-minus";
export const id="dl_e71b9d685ade479b823b";
export const url=new URL("../icons/lucid_3-shield-minus.svg?v=e98a15b18e987082872244f7319b6c91282fe23d923bd3d5c62c565b97d9a265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
