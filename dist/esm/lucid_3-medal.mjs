export const name="lucid_3-medal";
export const id="dl_75912f7af3ef4f368fec";
export const url=new URL("../icons/lucid_3-medal.svg?v=5d94e13b4f6a8c8d9928144726e466fb31280262d438ec5390ed41d5d87962eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
