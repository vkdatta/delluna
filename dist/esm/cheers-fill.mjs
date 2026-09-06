export const name="cheers-fill";
export const id="dl_6bdd1e2d27db4671a12f";
export const url=new URL("../icons/cheers-fill.svg?v=32d416e28e45aef65a7a650ca224828e7aab4726a0fb4ea3421e698abdead994",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
