export const name="skip-back-circle";
export const id="dl_cb66d58a5bc27e8662ca";
export const url=new URL("../icons/skip-back-circle.svg?v=d2206c95c4b0079f980b23da19f5eaac43f472e5e5f6da9dc57cfe049cc57bb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
