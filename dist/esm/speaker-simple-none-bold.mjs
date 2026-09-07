export const name="speaker-simple-none-bold";
export const id="dl_dbfb366ecc2a41e2bcd9";
export const url=new URL("../icons/S/speaker-simple-none-bold.svg?v=d4ef9648a9928c204d7e9a46cf860a6f5b4a48a38718c5f069853f30ab40a767",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
