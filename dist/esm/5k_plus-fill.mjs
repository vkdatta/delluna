export const name="5k_plus-fill";
export const id="dl_28fe9985914419cda2db";
export const url=new URL("../icons/5k_plus-fill.svg?v=42f4a85ff25eebaaecbb02d0b8e22b8b39b01e2ec7b27f646b125f797cb110f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
