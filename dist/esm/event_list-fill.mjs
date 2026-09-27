export const name="event_list-fill";
export const id="dl_8d38fec98a620375e45b";
export const url=new URL("../icons/event_list-fill.svg?v=db64e6612607a6cc971ded1b5d3dfecc74e0e9ceada76a6792386d006c81153a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
