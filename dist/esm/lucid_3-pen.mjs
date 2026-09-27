export const name="lucid_3-pen";
export const id="dl_71d1e1637dc046669ef9";
export const url=new URL("../icons/lucid_3-pen.svg?v=7028a56eff1e0530da6f7e76d6994d39bbf8cb86ade42f7b1727e8124310724e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
