export const name="translate-bold";
export const id="dl_0ec3fb3bdbf1428ab5c7";
export const url=new URL("../icons/T/translate-bold.svg?v=70d1bda4a6d605d2ac170436317028db98682358528012d3c40f91a2558b152c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
