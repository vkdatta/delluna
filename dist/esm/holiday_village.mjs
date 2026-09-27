export const name="holiday_village";
export const id="dl_6dda167f32de22dee6b5";
export const url=new URL("../icons/holiday_village.svg?v=8ec858f4f82bedb87e686e70dc2069ce5fa71c5cf00295b4451955eedac14e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
