export const name="snail";
export const id="dl_bcbdeb7d369a1cdf4480";
export const url=new URL("../icons/snail.svg?v=01c71d6b87908c3a6f9c01dfd2e38fa8a8409ecff0322127002d54f646ba18bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
