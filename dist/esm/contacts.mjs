export const name="contacts";
export const id="dl_30ae4677a8e41ba5a081";
export const url=new URL("../icons/contacts.svg?v=95ff7d25b7bb0b17572f37f3e04d4ded782035eaca4a705ce1134ed02d0e81c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
