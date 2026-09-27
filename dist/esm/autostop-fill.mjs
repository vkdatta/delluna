export const name="autostop-fill";
export const id="dl_884bdc19091566e888ec";
export const url=new URL("../icons/autostop-fill.svg?v=bf52d40114545a80458b12543b357192b809b7ea6c0be5d649acd71d34d9cfa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
