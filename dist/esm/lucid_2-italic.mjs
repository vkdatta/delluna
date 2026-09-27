export const name="lucid_2-italic";
export const id="dl_566c884ca6534c8183c5";
export const url=new URL("../icons/lucid_2-italic.svg?v=de2f3644d2f97da6532eadff42c233ec02c0cad8c2147e5727e4c6ffe85ea5ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
