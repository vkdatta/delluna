export const name="local_pharmacy";
export const id="dl_104780a6cec08b907a0a";
export const url=new URL("../icons/local_pharmacy.svg?v=4bba1e74eee8881765bc02b7e61f18520290f291d2612f973c1340a5152ce776",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
