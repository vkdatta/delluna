export const name="chat-light";
export const id="dl_d898a3ad314b45abb6dd";
export const url=new URL("../icons/chat-light.svg?v=a6815c3f14a4db4d18d3fd237185588ae23dadc7e3a25e4b7d142e327a4855a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
