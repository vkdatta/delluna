export const name="pedal_bike-fill";
export const id="dl_657a0b185a8fbc6155f7";
export const url=new URL("../icons/pedal_bike-fill.svg?v=d9ee8fb4c6e572a7924cd3e9731e367c28a1d64b84fb4ea11522b17116871301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
