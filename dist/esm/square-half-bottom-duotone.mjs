export const name="square-half-bottom-duotone";
export const id="dl_090565f75bdbe0251398";
export const url=new URL("../icons/square-half-bottom-duotone.svg?v=9d8c94075db39aace533211adedf069c2b45ff5f1166b190e20d08f3e952c5a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
