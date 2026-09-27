export const name="ladder-simple-thin";
export const id="dl_cbec387a2bca4bbc9f5c";
export const url=new URL("../icons/ladder-simple-thin.svg?v=fe12367c21be9b21084f3a48d1f2820c26d2b6c3547bb57cdf13cbd0d7b88b5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
