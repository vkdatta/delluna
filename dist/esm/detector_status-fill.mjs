export const name="detector_status-fill";
export const id="dl_1284c827e383f970ea94";
export const url=new URL("../icons/detector_status-fill.svg?v=1ee7ea201f6aefcbc091e2df161d377aedc670286796686e55a48448d28f182a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
