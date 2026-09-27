export const name="stool-light";
export const id="dl_a6c2fa012ad7fb91093d";
export const url=new URL("../icons/stool-light.svg?v=c3cfa4e1d4e7ef17c3be5b647617e75ce49773a44835da9d50d96c8367fcdf30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
