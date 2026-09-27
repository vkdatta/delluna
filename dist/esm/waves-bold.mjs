export const name="waves-bold";
export const id="dl_fb068cef591be8f77e31";
export const url=new URL("../icons/waves-bold.svg?v=9ad788d1104bba94882e4a0cbb8c68b9b194db7d32b0f30b712c0b50fcc49503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
