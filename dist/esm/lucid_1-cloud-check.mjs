export const name="lucid_1-cloud-check";
export const id="dl_2b3afa16cb0449db8937";
export const url=new URL("../icons/lucid_1-cloud-check.svg?v=5e46f562e3447b965be49c1c7b6ebc00e15084e48e32bbc4c338ecfc4720d746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
