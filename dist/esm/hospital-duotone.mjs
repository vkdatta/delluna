export const name="hospital-duotone";
export const id="dl_7cc6c610acaa45c5b7e1";
export const url=new URL("../icons/hospital-duotone.svg?v=52ae7d49f5d5b846a0c168e5bbf4c7ae2da2fe3232f828625a80deb5b236fdba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
