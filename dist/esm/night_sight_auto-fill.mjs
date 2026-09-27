export const name="night_sight_auto-fill";
export const id="dl_6fc27ebecfbe2983e40d";
export const url=new URL("../icons/night_sight_auto-fill.svg?v=e2bcee88bc3a5703b13e1120bc6db8c69a46326c965cb28aeb9571b2dfee65a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
