export const name="motorcycle-duotone";
export const id="dl_5ab73216ee22471dba5b";
export const url=new URL("../icons/motorcycle-duotone.svg?v=34dca652242bd2bca0af158901f7a5bc33ccd2b04af1779ed728bae5e43b25a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
