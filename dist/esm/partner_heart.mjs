export const name="partner_heart";
export const id="dl_5092a1685ba1b851d1c1";
export const url=new URL("../icons/partner_heart.svg?v=f77e042a10ae63ad77c45dcc41b988b2a3107ab59429e15140776fe8546945f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
