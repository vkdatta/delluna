export const name="list-dashes";
export const id="dl_a21ace86cd0d45189684";
export const url=new URL("../icons/list-dashes.svg?v=079aa2fa3b4e48351a98bf23fc8b7eff1e497bd9f9c0b1e8b81c568ad4359156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
