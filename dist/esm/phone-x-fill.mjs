export const name="phone-x-fill";
export const id="dl_d9bdfe515a184577af88";
export const url=new URL("../icons/phone-x-fill.svg?v=99b3b75d3d926a4a6c141bb6cb318dce15e953af5bf15d42e16e16c9def95f8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
