export const name="tibia-fill";
export const id="dl_ed89c2da26463c35f118";
export const url=new URL("../icons/tibia-fill.svg?v=233159ce54f350b7e1ca373701ec13656db2b3f6c3435d6d78f129d24201ad68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
