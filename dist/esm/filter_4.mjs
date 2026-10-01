export const name="filter_4";
export const id="dl_1d2d8cb1b3976b2d1f5b";
export const url=new URL("../icons/filter_4.svg?v=a3e67aa7f71f299356efb82cc9f93350aef150f3ffa1b712ce7703d9467acb13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
