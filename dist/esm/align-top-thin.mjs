export const name="align-top-thin";
export const id="dl_f39144a8acc3404dac04";
export const url=new URL("../icons/align-top-thin.svg?v=4ec63d2c5578eba5674e76604d322bbe5a7166544f97851a593b77de82b4a64d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
