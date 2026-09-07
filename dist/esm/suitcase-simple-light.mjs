export const name="suitcase-simple-light";
export const id="dl_bdd14125df8e4d508946";
export const url=new URL("../icons/S/suitcase-simple-light.svg?v=41494d1973df6cd9e32d84162d3650e4502bfaddc674cd5901f576b24a6698ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
