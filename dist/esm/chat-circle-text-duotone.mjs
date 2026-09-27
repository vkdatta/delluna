export const name="chat-circle-text-duotone";
export const id="dl_1cd4cdaef9944c5ba21e";
export const url=new URL("../icons/chat-circle-text-duotone.svg?v=c2d25469cf86a61f9eae78bdf8d343ecedada5390fc7ac86324756985f39047a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
