export const name="stacks";
export const id="dl_d530607a822debe5187d";
export const url=new URL("../icons/stacks.svg?v=5daaaacf50d484988283579c99a534abc49c4ca13c25e225c6c8f9082197753d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
