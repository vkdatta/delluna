export const name="person-simple-bike";
export const id="dl_50e8e4ed63534e9f9c90";
export const url=new URL("../icons/person-simple-bike.svg?v=bfc10ea2f7f904aa32948434af2b46726342289ff456038408c9865528797bab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
