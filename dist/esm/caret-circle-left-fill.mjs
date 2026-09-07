export const name="caret-circle-left-fill";
export const id="dl_711b641d4f8c4ae9ab8c";
export const url=new URL("../icons/caret-circle-left-fill.svg?v=5fde95b061338f3a3e340087374e5143c25dbc424be298ab908ac600a20009eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
