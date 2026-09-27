export const name="chats-teardrop-duotone";
export const id="dl_0cd0651b6d5b4500941e";
export const url=new URL("../icons/chats-teardrop-duotone.svg?v=87d7fb8a0545b1adc7d87d82c08e884bbdcbf708002856099316eebb8b8abf90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
