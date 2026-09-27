export const name="calendar-plus-bold";
export const id="dl_56a20235b9214ba7b947";
export const url=new URL("../icons/calendar-plus-bold.svg?v=25714b322f68109d084e6b82d71d181e8520ce4bfdf32f6cc0313466a1c88efe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
