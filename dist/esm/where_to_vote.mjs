export const name="where_to_vote";
export const id="dl_c5e900cc5b82580fe0a0";
export const url=new URL("../icons/where_to_vote.svg?v=9d2bf52fc67e32eb865aa24e9a9fa5d2dcc1967e77af6f63a3e551265d5d3da7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
