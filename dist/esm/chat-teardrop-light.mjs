export const name="chat-teardrop-light";
export const id="dl_0e496c29d10c4a149d52";
export const url=new URL("../icons/chat-teardrop-light.svg?v=ea713711f5f26c3528e187e2787c2bd1d05bd17f886c2c2577d7cbf96121a403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
