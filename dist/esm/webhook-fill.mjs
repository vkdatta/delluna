export const name="webhook-fill";
export const id="dl_d9a1b70d5dcbf06d15cc";
export const url=new URL("../icons/webhook-fill.svg?v=3c37dc1197382648cac4d1173bb62be62bfd871734c116ff80ed6d84fa2d715f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
