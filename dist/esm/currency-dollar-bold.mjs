export const name="currency-dollar-bold";
export const id="dl_42bff867295546678cb1";
export const url=new URL("../icons/currency-dollar-bold.svg?v=0148e14361ebbfa255b9c6b6bacb376583576ea3a3b8651843f914c77399ac83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
