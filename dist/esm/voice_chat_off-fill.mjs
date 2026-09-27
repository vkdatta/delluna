export const name="voice_chat_off-fill";
export const id="dl_0a984b69831759ae27d3";
export const url=new URL("../icons/voice_chat_off-fill.svg?v=6cbeba09ddbd1cc9e9ffb02712ebf83c42d235e6fa5e147ad3aadec032758afa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
