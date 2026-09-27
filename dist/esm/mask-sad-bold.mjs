export const name="mask-sad-bold";
export const id="dl_1060a7db79d041d1bd23";
export const url=new URL("../icons/mask-sad-bold.svg?v=9efdeb8b35e079757f0bb78933f1a4d64d937ab331af0cceeded76239ca063c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
