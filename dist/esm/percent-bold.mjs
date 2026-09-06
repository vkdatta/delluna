export const name="percent-bold";
export const id="dl_b887029f1b0c404f8884";
export const url=new URL("../icons/percent-bold.svg?v=764d31413f73d2d871e79df50c05110ad82b627b911530d4a4aa727e0cb69e6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
