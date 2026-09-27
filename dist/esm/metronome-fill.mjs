export const name="metronome-fill";
export const id="dl_4eae104980294e10a7a6";
export const url=new URL("../icons/metronome-fill.svg?v=985a509ce4fb80792c9cf2e4fc8f7d0ad5788125c8cc4b558adc3823a492f4fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
