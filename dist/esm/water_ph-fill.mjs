export const name="water_ph-fill";
export const id="dl_5e4eedf91ea44ddd9103";
export const url=new URL("../icons/water_ph-fill.svg?v=72493428a52b2b7f7add752697a8390bce805dbdc2673cdeefc80e07b235dcf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
