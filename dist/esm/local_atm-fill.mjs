export const name="local_atm-fill";
export const id="dl_f7af1958c70fe6296dc2";
export const url=new URL("../icons/local_atm-fill.svg?v=bb5b137028b3be5721d1f6e753b3dd81cf8a065caa0500e01e3f7cc86bf6e60a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
