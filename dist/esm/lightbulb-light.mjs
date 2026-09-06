export const name="lightbulb-light";
export const id="dl_dbc515c6ad6649b6afdf";
export const url=new URL("../icons/lightbulb-light.svg?v=284a7401bb102c5697651ce5c99eb21d61ccb529e86d2e018541edf871e5a09e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
