export const name="compass-fill";
export const id="dl_1eb86ea8312f43759aaa";
export const url=new URL("../icons/compass-fill.svg?v=9663ec833384ba767b617ba3c256a3e00a23bd666810e2f2214171896498b6dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
