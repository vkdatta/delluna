export const name="telegram-logo-bold";
export const id="dl_361648f14abf593a26c7";
export const url=new URL("../icons/telegram-logo-bold.svg?v=adbb8a52d2d8518442ccf6a14d770f9adf3b74412f80e6b85f02a15d7f0b9bb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
