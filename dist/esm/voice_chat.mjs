export const name="voice_chat";
export const id="dl_f9cdfdbc188d4c4a85c6";
export const url=new URL("../icons/voice_chat.svg?v=5635cc8ab13c213d65994f59c770a90251941b6ba479777936bea4c8bca2a640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
