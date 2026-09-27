export const name="paperclip-light";
export const id="dl_96cea20b1a5c4bc3b340";
export const url=new URL("../icons/paperclip-light.svg?v=694f4c0f059d91aaa9dccd422d46450a0468b801dc5c2bbb950e4ba707389dac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
