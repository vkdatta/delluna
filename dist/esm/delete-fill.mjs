export const name="delete-fill";
export const id="dl_13f8567e5a33f9b6bd9e";
export const url=new URL("../icons/delete-fill.svg?v=1e4f53e6519283745ffd2f80d08c9cf8e7bb0ac152c1cf1847681fe27ccd51e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
