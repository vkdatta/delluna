export const name="calendar-slash-bold";
export const id="dl_4e75c57d3dc14e8d9152";
export const url=new URL("../icons/calendar-slash-bold.svg?v=74a4e150f631f5a02da127cbcf4f3162286358921eacdf6c45544c75d37ec46c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
