export const name="electric_bike";
export const id="dl_39422cf68eac25652286";
export const url=new URL("../icons/electric_bike.svg?v=ea09243c50fbee26de13bd125077b2606d0e93438251b2790462d4b7a3cf9372",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
