export const name="lucid_3-scooter";
export const id="dl_9d362a84219f401fab13";
export const url=new URL("../icons/lucid_3-scooter.svg?v=8bd39651a7aaffca53e7523b402410b42f359daaa128dd8bc4a241f74a939aa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
