export const name="chat-circle-text-light";
export const id="dl_e8fa76466abf4655b0d3";
export const url=new URL("../icons/chat-circle-text-light.svg?v=8aac0dcc89253bdd2017ddc58eed175a8bc8f20c37238fb8005ef33a8fbd7a6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
