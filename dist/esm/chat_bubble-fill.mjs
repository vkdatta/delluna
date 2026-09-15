export const name="chat_bubble-fill";
export const id="dl_aa35e6dea62643ed8400";
export const url=new URL("../icons/C/chat_bubble-fill.svg?v=edec6c847b73611941224971d4820c76ee3eee35bedb5360ed54881f70032ff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
