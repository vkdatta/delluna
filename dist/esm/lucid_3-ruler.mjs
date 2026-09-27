export const name="lucid_3-ruler";
export const id="dl_f412f1d4618546a99bdf";
export const url=new URL("../icons/lucid_3-ruler.svg?v=aa9bed69e3c0b5283976c8d0d194bf2ea01fc0617cd139cba81254950b157d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
