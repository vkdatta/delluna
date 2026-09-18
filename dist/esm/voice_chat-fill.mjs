export const name="voice_chat-fill";
export const id="dl_3f71a03e870546489c19";
export const url=new URL("../icons/voice_chat-fill.svg?v=b5c66507d993d1ad40f9b1200a1bd8714996c4bac848d9593071269f964bbc22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
