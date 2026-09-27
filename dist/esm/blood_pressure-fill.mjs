export const name="blood_pressure-fill";
export const id="dl_89a81789014b21ca19a4";
export const url=new URL("../icons/blood_pressure-fill.svg?v=4107a6b4dd0a9cd07fa8c63285a87f4951c6f64dc82638f817bf734e133b2a88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
