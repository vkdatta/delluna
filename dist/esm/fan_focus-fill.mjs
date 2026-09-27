export const name="fan_focus-fill";
export const id="dl_094c776185e80447b79c";
export const url=new URL("../icons/fan_focus-fill.svg?v=30994d3395ad7b894fba9becf8689a956b9869765af3c271d15c52d971272703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
