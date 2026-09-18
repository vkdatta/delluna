export const name="check_small-fill";
export const id="dl_b8721fe1ff4446cd9818";
export const url=new URL("../icons/check_small-fill.svg?v=1cb3f09900fcbb837e8c6f7aad2acae8731bab535a811ff70634904b25a3fecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
