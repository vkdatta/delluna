export const name="thermostat_auto";
export const id="dl_07f45e51786f5349235b";
export const url=new URL("../icons/thermostat_auto.svg?v=d2043ca9278beddee802059f20d2705358bc70565b47626e039b6e84b870934a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
