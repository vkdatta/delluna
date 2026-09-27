export const name="chat-teardrop-slash-thin";
export const id="dl_1b19f2075dde4e37978f";
export const url=new URL("../icons/chat-teardrop-slash-thin.svg?v=2c370316bc69f230b036b2b328f5d9f86ba3fc135e7ba523b8fab0137b26ecc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
