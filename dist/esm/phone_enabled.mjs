export const name="phone_enabled";
export const id="dl_b1dc003e916d46308548";
export const url=new URL("../icons/P/phone_enabled.svg?v=d66504416fe461c8d98f229f9374cccf006327f511510754b3a66e1e491f5222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
