export const name="arrow-line-down-right-bold";
export const id="dl_072f0552618e431c9e4c";
export const url=new URL("../icons/arrow-line-down-right-bold.svg?v=b480930dd2734ba0118fcfeb68ec8fb2298201c39eecfa5d606520428845f178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
