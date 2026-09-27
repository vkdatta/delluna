export const name="language_us-fill";
export const id="dl_1dec9c941bdfb7bbb11d";
export const url=new URL("../icons/language_us-fill.svg?v=c78c9a4ce33c7e297cc3937997cf6ebe344792b5f6fee54d7e3ebb8edf12ed92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
