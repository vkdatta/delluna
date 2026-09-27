export const name="detector_status";
export const id="dl_a3b20483c874b264a52e";
export const url=new URL("../icons/detector_status.svg?v=0e9b2e0fa2439027ce24cbac96faf925419069a9a1f4eec2b74f43edf70679a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
