export const name="timer_3-fill";
export const id="dl_6e86d486ceb87d83f500";
export const url=new URL("../icons/timer_3-fill.svg?v=8017b0792bf809369137a3a7943eaafcdc4afe6e519ce7e52293144b66bb6b4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
