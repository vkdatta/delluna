export const name="chat-slash-duotone";
export const id="dl_0d6ba7be4624401ead6f";
export const url=new URL("../icons/chat-slash-duotone.svg?v=97964a120e63ecc5b221462127b78c0db21b8f15df43117f8344e81f24cc1994",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
