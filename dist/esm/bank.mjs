export const name="bank";
export const id="dl_8c8f39448b9d497dbb06";
export const url=new URL("../icons/bank.svg?v=c4edf4288f8a5b5744078195920271b0991cef97240e521ce4c4d7bd5d9f69a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
