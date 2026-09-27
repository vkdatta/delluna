export const name="conversation";
export const id="dl_6357fe2514c07bad977f";
export const url=new URL("../icons/conversation.svg?v=99f57f5912efc41d96c888e5b0d8a86e7ad0f025263a5177a9f2bfe3eacd4e5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
