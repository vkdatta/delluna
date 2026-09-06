export const name="lock-open-bold";
export const id="dl_16e9f63487bc4a099307";
export const url=new URL("../icons/lock-open-bold.svg?v=f8b5719f4b488fa9d58c1aa5519775013e8ca454ee03d95c0a65c1772cb18285",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
