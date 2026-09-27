export const name="chat-centered-slash-light";
export const id="dl_12e16e6ba8a3441bad33";
export const url=new URL("../icons/chat-centered-slash-light.svg?v=fdb324606c7aad9d7951c85c4c7a7698ac3aad75b6af13d235f8503bac8c2e9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
