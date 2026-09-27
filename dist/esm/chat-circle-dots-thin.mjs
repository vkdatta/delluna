export const name="chat-circle-dots-thin";
export const id="dl_eb69cfe51a2146cf9990";
export const url=new URL("../icons/chat-circle-dots-thin.svg?v=b15360c6b46498337842c8304c39020c1c3d8880855d37b79903a852e9cbbadb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
