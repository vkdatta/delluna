export const name="pizza-thin";
export const id="dl_dfaee60244cd44d7aa9e";
export const url=new URL("../icons/pizza-thin.svg?v=8e848bd64954c0842e76cf44ea8aaae85b3ccd32cb893974f818461400d0c833",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
