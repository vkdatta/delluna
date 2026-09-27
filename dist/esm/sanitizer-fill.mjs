export const name="sanitizer-fill";
export const id="dl_26316f37440dc46c6b49";
export const url=new URL("../icons/sanitizer-fill.svg?v=48fa0e250194d5a56769c10a92758481cb6224e66171e458af3696740ad3cc7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
