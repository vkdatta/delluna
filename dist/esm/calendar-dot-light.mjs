export const name="calendar-dot-light";
export const id="dl_a37c0dade90e43eda6e8";
export const url=new URL("../icons/calendar-dot-light.svg?v=d23a2f9ac7bcb6b12a35b7fd18eb3eac5be6e4efdf2344217901f671358270f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
