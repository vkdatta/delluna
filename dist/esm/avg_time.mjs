export const name="avg_time";
export const id="dl_14bd50a2514103c6b832";
export const url=new URL("../icons/avg_time.svg?v=ae2e7fc753a162d3a22677b16e55d1e91d5258fd44b24e001d877f7e5fb17469",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
