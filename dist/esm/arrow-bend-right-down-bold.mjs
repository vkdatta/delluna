export const name="arrow-bend-right-down-bold";
export const id="dl_557e625640db4233b1a6";
export const url=new URL("../icons/arrow-bend-right-down-bold.svg?v=4eb63e9ed5b3dead18deb3cc9affc6881d05cffa7860b5757c6eb60351792b7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
