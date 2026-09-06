export const name="hands-clapping-bold";
export const id="dl_469d4411390441bb9152";
export const url=new URL("../icons/hands-clapping-bold.svg?v=da650e95ba8ff4532097f6b7f124868c8c863e1b2e2330ecb905d6e361206967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
