export const name="counter_1";
export const id="dl_1c2c689b60e8db94462b";
export const url=new URL("../icons/counter_1.svg?v=2592fdb2f87f45d0befa1d61cfa620c0b54e9fc8d47cbd22564d7e430811bd18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
