export const name="search_gear-fill";
export const id="dl_b49f0d42d6dcda7558ed";
export const url=new URL("../icons/search_gear-fill.svg?v=b52025d519c88ffcbf3045b833dec3a7f5c0c0be28b9b7290cf61c3991b4bcf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
