export const name="chat-teardrop-text-fill";
export const id="dl_33bbe8bf926149c4a170";
export const url=new URL("../icons/chat-teardrop-text-fill.svg?v=91b4090e4ef6fe1b80ea23a0e905f155bb1007998fb278b70f8f6f953a2564d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
