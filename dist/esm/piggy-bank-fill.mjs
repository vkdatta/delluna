export const name="piggy-bank-fill";
export const id="dl_beafec7272d745ab948b";
export const url=new URL("../icons/piggy-bank-fill.svg?v=d3cd3ef513cefe60e9238d64fa9cc0226df2f8a58c4de2bb63fb94aeab92711d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
