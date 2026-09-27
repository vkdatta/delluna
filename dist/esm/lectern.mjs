export const name="lectern";
export const id="dl_c5b46b37a67248cfa7fd";
export const url=new URL("../icons/lectern.svg?v=63929e9045324f3b0b3451422f8379bb892c2ca89f2edf3bfcc427c6c0052280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
