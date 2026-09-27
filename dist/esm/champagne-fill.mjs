export const name="champagne-fill";
export const id="dl_870b64ad42254c22b0e5";
export const url=new URL("../icons/champagne-fill.svg?v=ef5448f271927563f93a86aa54db80057a2f5e64e86d65d95c1695ebb9643375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
