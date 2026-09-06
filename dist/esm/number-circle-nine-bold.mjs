export const name="number-circle-nine-bold";
export const id="dl_12ee073e949b461aaeca";
export const url=new URL("../icons/number-circle-nine-bold.svg?v=d6336d7cebb9f07cf5f2ba1796f6d9b6dcc3111c814c9459f00882bc913cc909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
