export const name="lockers-fill";
export const id="dl_7d5735d972ef44a08519";
export const url=new URL("../icons/lockers-fill.svg?v=e805cb2b741183ab35ada3664eb74928a7cf1dfc5e297ddfb34ff184241afde1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
