export const name="arrow-up-left-bold";
export const id="dl_dbe0837521e142e1ba0c";
export const url=new URL("../icons/arrow-up-left-bold.svg?v=9750289f3c251bbabaa1a155fae3923814f1679df2cc8f6ccb776cf80f5d4875",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
