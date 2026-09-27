export const name="pin_history-fill";
export const id="dl_614afda1222f9cc524b9";
export const url=new URL("../icons/pin_history-fill.svg?v=70bb826e8399b78947ad75ead73598a7e5ed4b98e89e322a698953fe4fc237b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
