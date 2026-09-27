export const name="counter_8";
export const id="dl_4a7aec1a8b11a055a620";
export const url=new URL("../icons/counter_8.svg?v=c60547af6656052d70fbf7826d48207b395740ab9d1c422f96416b38ac27faea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
