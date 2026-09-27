export const name="chat-teardrop-text-light";
export const id="dl_38a260cd266647159914";
export const url=new URL("../icons/chat-teardrop-text-light.svg?v=e485bbcdeeacbbd5eab7d078d815253e13b903594f869174d8703813f7672ac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
