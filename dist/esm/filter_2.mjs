export const name="filter_2";
export const id="dl_1d1d217e5f26642394bc";
export const url=new URL("../icons/filter_2.svg?v=4edf0907fc62330d05b80c2df889a65e4e71de4e6dd594276d2bc787ef9eb94c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
