export const name="lucid_3-phone";
export const id="dl_cf25a60dab584949b971";
export const url=new URL("../icons/lucid_3-phone.svg?v=bd50f964cf7686c0e2322ae9e968276419c7c5d18f41304aa39f3c39e19d80bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
