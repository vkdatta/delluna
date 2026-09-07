export const name="arrow-square-right-fill";
export const id="dl_1ae0a1ef1af847668155";
export const url=new URL("../icons/arrow-square-right-fill.svg?v=6d3e666d91ee85f52e944135d0ea6ed85d753e2418fdef8b1e6452f5654e7854",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
