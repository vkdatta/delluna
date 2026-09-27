export const name="not-equals";
export const id="dl_18f7df8e480f4a86b2a7";
export const url=new URL("../icons/not-equals.svg?v=1112a3250174e1e07f6b086915c5c040f5298e4885fce0ecead886fb004e8062",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
