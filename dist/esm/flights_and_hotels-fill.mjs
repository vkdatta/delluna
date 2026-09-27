export const name="flights_and_hotels-fill";
export const id="dl_2cd438aa48535afabcfb";
export const url=new URL("../icons/flights_and_hotels-fill.svg?v=f39fb46c0abd510fe627b3792eecb0a45fe8201345058d403d4d39eee2fcbd9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
