export const name="humidity_percentage-fill";
export const id="dl_03eb727b9e144ed9b82f";
export const url=new URL("../icons/H/humidity_percentage-fill.svg?v=e212921520a0f444a84577ca96bbeaf0adf2d9cc044a5615f2f348bc0df1b74b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
