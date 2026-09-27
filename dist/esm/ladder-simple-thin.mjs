export const name="ladder-simple-thin";
export const id="dl_cbec387a2bca4bbc9f5c";
export const url=new URL("../icons/ladder-simple-thin.svg?v=028ca181c97b6a669c8ab7161fcc8da93a7bda07deac2b9bde08fa11b71dea55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
