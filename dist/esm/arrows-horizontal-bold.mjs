export const name="arrows-horizontal-bold";
export const id="dl_40c12dadfcbb41bd8477";
export const url=new URL("../icons/arrows-horizontal-bold.svg?v=e4a49359bba94761666c4f9707ac0cf762075471a75f8ec91d728b78d74b5793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
