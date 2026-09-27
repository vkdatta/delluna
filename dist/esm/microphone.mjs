export const name="microphone";
export const id="dl_2ee9613ac90947f5b2da";
export const url=new URL("../icons/microphone.svg?v=a56632540712e25a814fa6928ac7286a1de2cbf163286e23be3a9d6a636445cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
