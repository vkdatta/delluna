export const name="chat-centered-slash-fill";
export const id="dl_3b68eb7f58414f0b856f";
export const url=new URL("../icons/chat-centered-slash-fill.svg?v=504959020df9893144599f6b07bf18f01bff7e35b11b3c2c55eedf8cd3b8b3d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
