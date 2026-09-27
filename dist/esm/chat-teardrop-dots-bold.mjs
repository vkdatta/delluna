export const name="chat-teardrop-dots-bold";
export const id="dl_d4e10990ee034ae49fad";
export const url=new URL("../icons/chat-teardrop-dots-bold.svg?v=5ac07099d34fba39fd168e855107ec0ab2c9ad57cd818c5f83ab16f2d96ed898",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
