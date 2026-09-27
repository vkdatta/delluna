export const name="chat-centered-slash-thin";
export const id="dl_0ceea504c34149fbbb00";
export const url=new URL("../icons/chat-centered-slash-thin.svg?v=c89aee1dd0bfd36dc3ec94a72c0ae8690464136d7b65721b19be95636feff5ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
