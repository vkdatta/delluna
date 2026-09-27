export const name="line_start_circle";
export const id="dl_bed639d735fadbfc7483";
export const url=new URL("../icons/line_start_circle.svg?v=78bf3efa4d3c56e8ffd794133ede3a542efc66343035d7a6ad8969ef20748245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
