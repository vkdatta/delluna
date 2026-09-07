export const name="printer-fill";
export const id="dl_81e985286ea14e58ab01";
export const url=new URL("../icons/printer-fill.svg?v=c572a5ccb2cb313da2a40152bfb594876f9b368c648aec4b331c07fab51d3fae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
