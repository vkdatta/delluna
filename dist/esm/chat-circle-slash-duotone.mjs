export const name="chat-circle-slash-duotone";
export const id="dl_2e682608078741d6867b";
export const url=new URL("../icons/chat-circle-slash-duotone.svg?v=1fe6eb126000dbae39194e38717ce23cec7f2ab3ae34ec46db96cbafe9666482",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
