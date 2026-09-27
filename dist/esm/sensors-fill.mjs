export const name="sensors-fill";
export const id="dl_473fa27f50aa09bcb562";
export const url=new URL("../icons/sensors-fill.svg?v=bf15867a0028f7cbafdf556d2c778783d529e4733fc5d11d451e2f5c94228de1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
