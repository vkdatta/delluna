export const name="line_start_diamond-fill";
export const id="dl_0ac20d6d57da4e2c0d3c";
export const url=new URL("../icons/line_start_diamond-fill.svg?v=79fad21e237f335979ca5427227aa7fed2be824568c3faa0c1663848375750af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
