export const name="house-light";
export const id="dl_161ec25e24bc4ff09914";
export const url=new URL("../icons/house-light.svg?v=b55d0d9751139b01f63aef2a947d7077b987ca3541782e5d9c50c066e810e423",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
