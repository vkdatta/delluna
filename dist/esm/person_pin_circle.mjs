export const name="person_pin_circle";
export const id="dl_39256c0816278c628d41";
export const url=new URL("../icons/person_pin_circle.svg?v=bd1eae6b54b3e7f266adca8a9ab7bae30278a74a40a0f13ab441de2f37a857a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
