export const name="sports";
export const id="dl_3c18d7e3a265228d989b";
export const url=new URL("../icons/sports.svg?v=79827119e5913bab00536c7a6ebebd3542ce54ffc7ac8609931c8c9232ec1df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
