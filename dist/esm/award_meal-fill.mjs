export const name="award_meal-fill";
export const id="dl_7445ffa2986a08ec417b";
export const url=new URL("../icons/award_meal-fill.svg?v=9a941d18cb1a01c18bd4ad7086a7b670016a141921fbc7396881116a0187b7e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
