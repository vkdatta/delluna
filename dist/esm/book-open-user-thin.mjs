export const name="book-open-user-thin";
export const id="dl_ae98eeb22b7b4972816b";
export const url=new URL("../icons/book-open-user-thin.svg?v=96fbfea0b0f678f5fa9fe11c1e09d84aaf137505843a52310a855512bf2294df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
