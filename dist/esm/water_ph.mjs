export const name="water_ph";
export const id="dl_b845f5f6b89d36b26ad3";
export const url=new URL("../icons/water_ph.svg?v=a027507fa955b8fc2ed37af4df6cba00af7d4d4beee973cca1dd1e558a1a2725",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
