export const name="lucid_1-car-battery";
export const id="dl_d81d6c5012cc462a9ada";
export const url=new URL("../icons/lucid_1-car-battery.svg?v=6558423a58ccf10d1974eede76888276b9dcd814985cf4b7f0a82cc98ae69caa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
