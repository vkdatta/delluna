export const name="10k-fill";
export const id="dl_fea0529b82eb47e4baa6";
export const url=new URL("../icons/1/10k-fill.svg?v=455555c84dffa1f6e8bb046b4ed3321a66336fdade99b693198df3b6beda24d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
