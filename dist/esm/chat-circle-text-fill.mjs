export const name="chat-circle-text-fill";
export const id="dl_eb13ed6a711f42b6a60c";
export const url=new URL("../icons/chat-circle-text-fill.svg?v=fd7fe0a27658a987f970d1737306c39b217e4d7ba482341f8bc0b17cf5a7fe06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
