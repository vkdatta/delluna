export const name="cards_stack";
export const id="dl_1f88454ec545711a4a3a";
export const url=new URL("../icons/cards_stack.svg?v=fc56233e319b14206ea6004ee6267e2b6fc4fbad99f260774876402ed6495c2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
