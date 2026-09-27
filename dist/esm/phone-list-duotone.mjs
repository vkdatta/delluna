export const name="phone-list-duotone";
export const id="dl_f60676f445a3416ab5b2";
export const url=new URL("../icons/phone-list-duotone.svg?v=edd44b5941d8ea2fb6202e01dbf5134af5966c9bd68d7c57c199c1b7fb3b4fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
