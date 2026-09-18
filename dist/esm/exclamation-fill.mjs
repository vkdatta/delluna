export const name="exclamation-fill";
export const id="dl_f74089b54698499f8d4e";
export const url=new URL("../icons/exclamation-fill.svg?v=3abf7954544177e4ca6010d9a8037abb83cf0888b247dce8f3c1afa5f42f7e21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
