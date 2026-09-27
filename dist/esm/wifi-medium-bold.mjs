export const name="wifi-medium-bold";
export const id="dl_9bf61cc3be5c6d765ead";
export const url=new URL("../icons/wifi-medium-bold.svg?v=ee9ce482e32f33f556e8e84936dafe2b1298ee4d2ccb7b946037cfc6e3726545",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
