export const name="shirt-folded-bold";
export const id="dl_5c0d1e6faf81f61deafd";
export const url=new URL("../icons/shirt-folded-bold.svg?v=ac6625ae3bbb25c3413f6ba19851b0cffabc753aa4f40d5ec0b3386eaafbe0c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
