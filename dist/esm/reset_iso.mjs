export const name="reset_iso";
export const id="dl_44b22cd4815d44f09488";
export const url=new URL("../icons/R/reset_iso.svg?v=950d94e61b8796cc1e71f86124ea522780ede8e222c3993c2d497795c5d19963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
