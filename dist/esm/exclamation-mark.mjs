export const name="exclamation-mark";
export const id="dl_2866a7c003854f0e8f75";
export const url=new URL("../icons/exclamation-mark.svg?v=35216f419533ac6ae53cdb7746cf9913847d28aa933454631763484e0937129e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
