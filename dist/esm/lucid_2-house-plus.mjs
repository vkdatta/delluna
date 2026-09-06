export const name="lucid_2-house-plus";
export const id="dl_a0fcc4fb9aa24e8c89eb";
export const url=new URL("../icons/lucid_2-house-plus.svg?v=f02084e625b91ba97a674140cb7d40072fd7a0d603f576835ea41604faaddf97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
