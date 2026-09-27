export const name="sensors_krx-fill";
export const id="dl_80ab12175c848df21692";
export const url=new URL("../icons/sensors_krx-fill.svg?v=5056b1055ebcf40175a10a79f0f63056d2be0dd0730f71bbf564c8e7a4f780d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
