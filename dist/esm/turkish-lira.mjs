export const name="turkish-lira";
export const id="dl_d2e1c79698d44856be5c";
export const url=new URL("../icons/turkish-lira.svg?v=a708802aa76f1d033401cdb12bf069fbebe5c6997776d93ca5490b1c072958e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
