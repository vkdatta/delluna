export const name="chat-centered-dots-light";
export const id="dl_c42a1ae87ce14289a70b";
export const url=new URL("../icons/chat-centered-dots-light.svg?v=2f86b0642e8e1cce802336a85f31e2696c394929e4013d60902f52125d7d4d50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
