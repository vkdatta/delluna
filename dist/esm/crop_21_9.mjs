export const name="crop_21_9";
export const id="dl_6510376fb4cbe6cd81ff";
export const url=new URL("../icons/crop_21_9.svg?v=a14fd9c46d4be74ff30f667bf2f4433cd6715431d81d6ba1548475ce34d398f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
