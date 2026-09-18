export const name="monitor_weight_gain";
export const id="dl_0d924f4ba17d4708986b";
export const url=new URL("../icons/monitor_weight_gain.svg?v=e2b70c2e302c6f600f556eac6b01bf8e396648e645f35b285223c9a007e17761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
