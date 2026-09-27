export const name="hotel_class";
export const id="dl_c0ee932dd03374307866";
export const url=new URL("../icons/hotel_class.svg?v=9bab724cec21d965815a2b75e2023ff6b3edad0ea56fdcbde00f617d6a1e9b4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
