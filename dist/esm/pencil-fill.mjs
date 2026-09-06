export const name="pencil-fill";
export const id="dl_f1ce9b80084b4a208d2b";
export const url=new URL("../icons/pencil-fill.svg?v=a156b712ec0b445881f28d5e4b4ca8aa073bb88dd9df8d076eba19ed65d67c2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
