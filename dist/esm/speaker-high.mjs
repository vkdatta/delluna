export const name="speaker-high";
export const id="dl_a4d0759d45f044799566";
export const url=new URL("../icons/S/speaker-high.svg?v=caca5fc1ee8489ac19232301d2c96f6d4048802491d75d761bbb89d5c98e459d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
