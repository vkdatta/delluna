export const name="11mp-fill";
export const id="dl_816755c842269ddec369";
export const url=new URL("../icons/11mp-fill.svg?v=cae78f4cf061714081f5bdd14f0f505ddc712640cac2de3b0f5d6b9229ebc4b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
