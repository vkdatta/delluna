export const name="plus-square-bold";
export const id="dl_c0ef2cd6834c4ae1a2c4";
export const url=new URL("../icons/plus-square-bold.svg?v=40a1cfdd364d33d5dad4beb7312c08d41b744a1beb76b56c0d155efdbea145b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
