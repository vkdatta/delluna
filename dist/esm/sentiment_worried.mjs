export const name="sentiment_worried";
export const id="dl_50ddd469f19342f7f90a";
export const url=new URL("../icons/sentiment_worried.svg?v=ec46055336fe600dc31d62e585715d552c509c54bd0201a0cb0b320decb59e23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
