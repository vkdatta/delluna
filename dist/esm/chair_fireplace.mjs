export const name="chair_fireplace";
export const id="dl_8a85359615825f137734";
export const url=new URL("../icons/chair_fireplace.svg?v=e26f7610bf317382cf240f27431df13b268d89c37a01abaacf775c53849553cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
