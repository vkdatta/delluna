export const name="weather_snowy";
export const id="dl_a030e82bff5d425c7b53";
export const url=new URL("../icons/weather_snowy.svg?v=3062b3e897c9438d008d695ff2eb9de30c8746504429341d89284275477b7bc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
