export const name="battery-charging-vertical-bold";
export const id="dl_b581ae16f66348c89aa3";
export const url=new URL("../icons/battery-charging-vertical-bold.svg?v=e008a87ae7c45b30abf47b2bdc2d0875fdf68235ce2834321571ccce27c9e599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
