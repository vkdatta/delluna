export const name="call_to_action";
export const id="dl_f0723c414610ef9bae7c";
export const url=new URL("../icons/call_to_action.svg?v=8d90f864e435fbebecf95064c87d87b857d3204087992c4aa85d196249fcf38a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
