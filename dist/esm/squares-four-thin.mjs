export const name="squares-four-thin";
export const id="dl_1f98dd9095e434d015b1";
export const url=new URL("../icons/squares-four-thin.svg?v=b351fd31ec533cef042df916bed7b8f7bb8ee5b7ee1f33c0b37762ae8dda1f14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
