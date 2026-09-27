export const name="arrow-u-down-right-bold";
export const id="dl_81d7031343f947d88090";
export const url=new URL("../icons/arrow-u-down-right-bold.svg?v=66370d5f9e7f6b5d31db6e5859db10de849796cfb874c79ebfa5120c58a9e00a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
