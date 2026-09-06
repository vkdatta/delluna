export const name="goggles-bold";
export const id="dl_7b266cc7dc524e4d856b";
export const url=new URL("../icons/goggles-bold.svg?v=6dcc8b505a6611b56b4302b33698c7f1d5279d543547e7156e0612ab3b34ecf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
