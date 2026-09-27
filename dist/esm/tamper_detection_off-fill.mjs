export const name="tamper_detection_off-fill";
export const id="dl_8bc997f005d95a685941";
export const url=new URL("../icons/tamper_detection_off-fill.svg?v=7447230b48af5ded3b7de61347dc0fc20886c06292bae8e5767e10211949683e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
