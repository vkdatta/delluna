export const name="car-bold";
export const id="dl_9a8c09b8ad114968ac69";
export const url=new URL("../icons/car-bold.svg?v=1db75c5bc67a4657982f4c901db60031b393756ff30134320a6c1224a61e6a64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
