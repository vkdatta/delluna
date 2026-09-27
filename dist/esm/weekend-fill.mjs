export const name="weekend-fill";
export const id="dl_7990436024d94d1f269b";
export const url=new URL("../icons/weekend-fill.svg?v=539e311c937a896d79001d7efe18bdb5e021ef96b79780c988ea9564082c711b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
