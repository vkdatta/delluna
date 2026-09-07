export const name="number-one-light";
export const id="dl_95f7e13fc98442f281fb";
export const url=new URL("../icons/number-one-light.svg?v=42a6373bab7355475e6325b2c6c1264c3502ef42cd765133ff03c0dad64838ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
