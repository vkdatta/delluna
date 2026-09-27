export const name="looks_one";
export const id="dl_2c8ea5a8a936118f0b44";
export const url=new URL("../icons/looks_one.svg?v=4720c22c7d6a8b1d6da2d07f8a915f014bfa9bd1eb098f0873793f2c9c083de0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
