export const name="shower-light";
export const id="dl_ec7a6ab9e06d4d3b97a3";
export const url=new URL("../icons/S/shower-light.svg?v=8b5d6325e81ea0cf2c0bd87d3ba55182bf663e1661e0b31eab68a97d1c7b92ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
