export const name="cursor-text-bold";
export const id="dl_41975ea073f043918bad";
export const url=new URL("../icons/cursor-text-bold.svg?v=b68b14fe56847b338a11fb5403488e7f6df9b8b596ad3c2434c6731d228af6ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
