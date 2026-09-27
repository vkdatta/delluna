export const name="chat-circle-thin";
export const id="dl_286f30c85f474e428b16";
export const url=new URL("../icons/chat-circle-thin.svg?v=8b74178f9a88daf675b4029699ca8fd21b3e751b6c7568177216df41aa5f7ce1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
