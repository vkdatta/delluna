export const name="temple_hindu";
export const id="dl_beb346248f768b0cb782";
export const url=new URL("../icons/temple_hindu.svg?v=6d10f030141f9a18112e68caff45adf1f7e01e565804e18fe1035b41df70bcfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
