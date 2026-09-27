export const name="blur_on-fill";
export const id="dl_615874d875e92fba825f";
export const url=new URL("../icons/blur_on-fill.svg?v=a273c120cbcda52c57256e292d5085bf23df73de05bf5e216771c844880ea554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
