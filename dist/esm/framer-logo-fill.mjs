export const name="framer-logo-fill";
export const id="dl_f2e26a854bb24a38a7a1";
export const url=new URL("../icons/framer-logo-fill.svg?v=bdab97acb701233f9a418f326ce206b6b468e3da0090a84a6d4050f6a509445e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
