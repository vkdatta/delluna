export const name="chat-circle-text";
export const id="dl_2b098d4926b24f8b85c8";
export const url=new URL("../icons/chat-circle-text.svg?v=1fce1218878e75b01183694d9b4c1c1de6e5cd01b851554192ed77c29cca3d91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
