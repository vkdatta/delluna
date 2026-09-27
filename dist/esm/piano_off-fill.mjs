export const name="piano_off-fill";
export const id="dl_bf39b21dedca57191e4d";
export const url=new URL("../icons/piano_off-fill.svg?v=24cc1cfa6664391e50bbee6943b06bafd7a0ae8b01caaa2fda6ead284a90c100",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
