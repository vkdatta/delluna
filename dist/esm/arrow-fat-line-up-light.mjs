export const name="arrow-fat-line-up-light";
export const id="dl_7b9e78e4fdb54f0581af";
export const url=new URL("../icons/arrow-fat-line-up-light.svg?v=e36e1fe110789948dbbbf86252c2522f7ed8b3b2cd94d8768a6aeccad644a8d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
