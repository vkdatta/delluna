export const name="arrows-merge-fill";
export const id="dl_4ebb23f9489a41cc806b";
export const url=new URL("../icons/arrows-merge-fill.svg?v=307633817b533fa24fdd2de5fac50dc5645279efa562c2930419073895180dad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
