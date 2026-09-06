export const name="handshake-light";
export const id="dl_f362a5db5d80490ab85e";
export const url=new URL("../icons/handshake-light.svg?v=51cbfa9d5444557281fee09e8221749f399a9f2cb387b3f20a4f6ad4d1a02de1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
