export const name="looks_6";
export const id="dl_379dd4f927568dd4a2d8";
export const url=new URL("../icons/looks_6.svg?v=a69403c87bfcaa8dca39ecf85c5accf62b29dcfb1847450ce5536ed0f1df9cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
