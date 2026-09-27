export const name="pipe-wrench-light";
export const id="dl_44b157fe813b4d8c9290";
export const url=new URL("../icons/pipe-wrench-light.svg?v=799bd346ca6430b05a53388f89d26ccc8dfd8f2916808f846952e3f2e8ee93a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
