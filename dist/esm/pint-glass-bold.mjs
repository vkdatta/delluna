export const name="pint-glass-bold";
export const id="dl_e8f44bdabb414a748a6d";
export const url=new URL("../icons/pint-glass-bold.svg?v=316c345623f5e5e22be3b0bfd86b11c96535377737012e482e8d6c6f8df21c09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
