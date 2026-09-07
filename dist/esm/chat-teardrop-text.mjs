export const name="chat-teardrop-text";
export const id="dl_ef152727562e469faad0";
export const url=new URL("../icons/chat-teardrop-text.svg?v=7dae1b3a3181f40267f5bbce89a85900f402e1ec2af7025fc8d2f6c75618bdcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
