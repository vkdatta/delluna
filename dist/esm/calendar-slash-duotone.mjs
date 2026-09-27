export const name="calendar-slash-duotone";
export const id="dl_d69e674f68914f218ae1";
export const url=new URL("../icons/calendar-slash-duotone.svg?v=4af2a9ef5cc4c04bbfc39305d782a12fde86384e6104a080aa4f4a11ab230d3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
