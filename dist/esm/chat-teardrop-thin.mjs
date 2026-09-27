export const name="chat-teardrop-thin";
export const id="dl_2ce421f425114fc098b7";
export const url=new URL("../icons/chat-teardrop-thin.svg?v=feacf2252e6b01a782fabacc348a2f48a2cc6742badf134ecb8abe2e860ef577",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
