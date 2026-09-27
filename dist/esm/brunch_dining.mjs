export const name="brunch_dining";
export const id="dl_434eb9eed93b0ea6b708";
export const url=new URL("../icons/brunch_dining.svg?v=f73cd13ee1ba92c9aace5596a1cb2611c802064c0384314096610ebf098f9329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
