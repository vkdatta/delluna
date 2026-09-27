export const name="network-duotone";
export const id="dl_91d4a19982324cd7ab73";
export const url=new URL("../icons/network-duotone.svg?v=675c0aef7796546a3050e0fd61b47cac0bac624dbd0dead2622304792840e4fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
