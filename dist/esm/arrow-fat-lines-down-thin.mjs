export const name="arrow-fat-lines-down-thin";
export const id="dl_dee93bbf77d34218bc1f";
export const url=new URL("../icons/arrow-fat-lines-down-thin.svg?v=502b069da2df2d158b4865f713b3281692e651057fc67da2075903d60f4b5cce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
