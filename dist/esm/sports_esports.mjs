export const name="sports_esports";
export const id="dl_eae3fdbae6314fec8056";
export const url=new URL("../icons/S/sports_esports.svg?v=c957977565f9c0a309ce8dc5995f894f844b038e42bb9d8a667439e26fd2d5fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
