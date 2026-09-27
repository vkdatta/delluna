export const name="lucid_1-arrow-up-from-line";
export const id="dl_82dc0d0d07a84a989ef8";
export const url=new URL("../icons/lucid_1-arrow-up-from-line.svg?v=a22467ba150f109b015138d28d7b5f40d9a81371c7750fa3fe0f230f1e98acd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
