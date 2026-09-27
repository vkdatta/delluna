export const name="calculate";
export const id="dl_34188b30b22f206c952e";
export const url=new URL("../icons/calculate.svg?v=e810eb5442488f10405c25ba1a4a591bff38d3f834a4e6dc8d9f502ecad97480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
