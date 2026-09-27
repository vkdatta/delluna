export const name="chat-circle-text-light";
export const id="dl_e8fa76466abf4655b0d3";
export const url=new URL("../icons/chat-circle-text-light.svg?v=69cd6f2be46ab51b8bee73064d7bc3508d22c7967951df10b8aecc9fc64d8a27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
