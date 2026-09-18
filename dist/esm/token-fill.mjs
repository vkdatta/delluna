export const name="token-fill";
export const id="dl_2a7ade48c8e747bca185";
export const url=new URL("../icons/token-fill.svg?v=f4b3c4a88031e081b7eff99e12fefd6e4985b0fb88b2eb55d70ec88eaa529f58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
