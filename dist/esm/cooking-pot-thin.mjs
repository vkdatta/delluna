export const name="cooking-pot-thin";
export const id="dl_8325a6b01d344d1d836f";
export const url=new URL("../icons/cooking-pot-thin.svg?v=41cd7f85cea9f6c550ae8ce1ec85cec379eec8cbb48d0fea34f9ecafc3edbab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
