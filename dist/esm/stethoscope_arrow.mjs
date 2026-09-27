export const name="stethoscope_arrow";
export const id="dl_58e77b47c362a5a6b4e2";
export const url=new URL("../icons/stethoscope_arrow.svg?v=2755776160b30ef8b2a6b57a1e97ad6aaa74359bb8ad17ca5b600cc62fae5c7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
