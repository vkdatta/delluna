export const name="settings_phone-fill";
export const id="dl_2d4532364ee8033c95c8";
export const url=new URL("../icons/settings_phone-fill.svg?v=f7942e4ef45c1d68969fd082bdf2342311c44ee29e95d23e253bdf5d9c0b9fed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
