export const name="layout-thin";
export const id="dl_41c5f8c617f840918caa";
export const url=new URL("../icons/layout-thin.svg?v=c03b43451709048d32257cc13ee799ca9bc7ffee4dd09b2651eb25caa2802a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
