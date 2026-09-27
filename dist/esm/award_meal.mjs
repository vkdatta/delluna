export const name="award_meal";
export const id="dl_c8ef8ea64bd0b11332fd";
export const url=new URL("../icons/award_meal.svg?v=0d19e6b55b2d120bde5d459ff48273f7469a21afb13c79a80fb17c97175e31e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
