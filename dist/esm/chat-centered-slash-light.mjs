export const name="chat-centered-slash-light";
export const id="dl_12e16e6ba8a3441bad33";
export const url=new URL("../icons/chat-centered-slash-light.svg?v=144f7a628fc1156278edbc297fd92b32a8bee1ea8533b98f03837ac1a8c08afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
