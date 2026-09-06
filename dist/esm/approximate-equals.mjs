export const name="approximate-equals";
export const id="dl_b28f7cd7d7d343feb100";
export const url=new URL("../icons/approximate-equals.svg?v=cbb6e54590c2a24562b38f6f9d8c53baf3a77c179cfb7769569fcefc9fa7a739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
