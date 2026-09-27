export const name="person_apron";
export const id="dl_c632f33cc83db272d329";
export const url=new URL("../icons/person_apron.svg?v=7e9cbd7eaa75e08480c9fd9fcf43d23fc1404fc89f4b9ae5c5ef9b9502cf8f9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
