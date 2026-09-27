export const name="sports_basketball";
export const id="dl_f273fe7c57b0378c1a4f";
export const url=new URL("../icons/sports_basketball.svg?v=8340d57fd627dbb938d37f35a369a8408fc72b72cbed5a7794ab8628940234e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
