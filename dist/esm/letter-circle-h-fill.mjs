export const name="letter-circle-h-fill";
export const id="dl_c18eb78ebc0248bc8895";
export const url=new URL("../icons/letter-circle-h-fill.svg?v=7b850b8d1e6ae1a19c1917d4078fdcfb0d063bbe40e2995c71c421b1b55452ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
