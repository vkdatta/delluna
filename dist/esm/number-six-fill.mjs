export const name="number-six-fill";
export const id="dl_c3a6f167c7e44b87b81a";
export const url=new URL("../icons/number-six-fill.svg?v=c60d3bc369428c4836384745bbe5bbf587d499e5acf31e6448ccb63dee8589e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
