export const name="synagogue-duotone";
export const id="dl_2da591eb7cb146ff934a";
export const url=new URL("../icons/S/synagogue-duotone.svg?v=8b7466f5bf1a3c20febca854f9d6a39eeec05c817d5035b4201b53c132232aa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
