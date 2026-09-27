export const name="needle-bold";
export const id="dl_3d07cecad2974eea9a23";
export const url=new URL("../icons/needle-bold.svg?v=2ee76de3184d1f88041dbe3368cd1d0ca8b51accb16625df0dce39d5db11a692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
