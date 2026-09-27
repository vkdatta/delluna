export const name="server_person";
export const id="dl_cdffe50f30e821ee8345";
export const url=new URL("../icons/server_person.svg?v=e3b9544ed0a3e0ec87ca6623c8fd341865341491f9218f898318b0accb9b7305",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
