export const name="flying-saucer-fill";
export const id="dl_e7f96558ecce4d5e8675";
export const url=new URL("../icons/flying-saucer-fill.svg?v=7f9c938d2bcb0f009d61791fab6240d159f090e76bef5232807cb75cd219e96d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
