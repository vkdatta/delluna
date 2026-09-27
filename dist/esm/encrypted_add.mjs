export const name="encrypted_add";
export const id="dl_c3769ef248897e490109";
export const url=new URL("../icons/encrypted_add.svg?v=0b5594691d8b237bd9dd12629d8d5286e3371a587d8e98f4937509316385a542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
