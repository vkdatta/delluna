export const name="calendar-slash-bold";
export const id="dl_4e75c57d3dc14e8d9152";
export const url=new URL("../icons/calendar-slash-bold.svg?v=7b58da433da91f2807353810177e5f677ae93069b0f59da21351c00b097d3e96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
