export const name="lab_panel";
export const id="dl_d7327e2b8598e6fe9e64";
export const url=new URL("../icons/lab_panel.svg?v=1782892a5f20922f60c2a9402baec616dbd78dbc5df839b09d38cdc0fcc99077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
