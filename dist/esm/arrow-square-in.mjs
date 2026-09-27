export const name="arrow-square-in";
export const id="dl_1752dd65a70249748fae";
export const url=new URL("../icons/arrow-square-in.svg?v=104f9ed7e895928ff30f46c7c7e8706550ce4c4a7678b30af748d37cc27fad38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
