export const name="chat-teardrop-light";
export const id="dl_0e496c29d10c4a149d52";
export const url=new URL("../icons/chat-teardrop-light.svg?v=aa5e73c25290eecdcdf5b00675383fd2e47ee8306d6382104bb1b5b01a602b10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
