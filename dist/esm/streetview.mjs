export const name="streetview";
export const id="dl_55547b39916de32f63b6";
export const url=new URL("../icons/streetview.svg?v=a860001bfbb0584a2e6b35ef4b47d76d4684bac36484ca25773e29eb18e2032f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
