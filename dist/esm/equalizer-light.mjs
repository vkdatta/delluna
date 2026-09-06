export const name="equalizer-light";
export const id="dl_d9e1a01c0ca447cc8a47";
export const url=new URL("../icons/equalizer-light.svg?v=8138d6d9fe3ce06b402d25ea0835f516b42f595f388f5454fc931778ded0d780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
