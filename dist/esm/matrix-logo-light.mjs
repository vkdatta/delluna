export const name="matrix-logo-light";
export const id="dl_2467d8da66f04af49209";
export const url=new URL("../icons/matrix-logo-light.svg?v=f44955916368b61d2686c528c12ba32d2abc299e4534625ec3c40e7e266b87b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
