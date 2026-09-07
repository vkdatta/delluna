export const name="chat-centered-slash-thin";
export const id="dl_0ceea504c34149fbbb00";
export const url=new URL("../icons/chat-centered-slash-thin.svg?v=c6afb8bb9b2c8db9deb454c55abb79f5dd6a79fa55f5a93520448590420873f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
