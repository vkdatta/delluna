export const name="lucid_1-arrow-up-from-line";
export const id="dl_82dc0d0d07a84a989ef8";
export const url=new URL("../icons/lucid_1-arrow-up-from-line.svg?v=95ee124ae6f541bcf306900a1680aa0d9caa4eef7ba1d2fcc13bb5a09c24c9a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
