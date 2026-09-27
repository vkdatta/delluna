export const name="detector_co-fill";
export const id="dl_de4ac56889fb096ea90f";
export const url=new URL("../icons/detector_co-fill.svg?v=4d6c3adebf0ec37a7728bf8ebc98f5b3cb0a3ee51058449cae1a7376c6628104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
