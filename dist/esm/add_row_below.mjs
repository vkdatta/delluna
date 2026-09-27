export const name="add_row_below";
export const id="dl_17f468876297d54ef1be";
export const url=new URL("../icons/add_row_below.svg?v=7456be21de660fc80b30628a0bc13687ca65027543726d88489d2ebd934d0537",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
