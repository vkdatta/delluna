export const name="encrypted_minus_circle-fill";
export const id="dl_a7db46a751ffdd4b3788";
export const url=new URL("../icons/encrypted_minus_circle-fill.svg?v=a495d596bb59ab2b9388345b7a99d699e17cd7adba548d5c8c9c7158576d4416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
