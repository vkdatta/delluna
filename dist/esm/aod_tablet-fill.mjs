export const name="aod_tablet-fill";
export const id="dl_df35c5bae0fe6465efa8";
export const url=new URL("../icons/aod_tablet-fill.svg?v=72e116c50b11bd2829e1897b4c28cb63e942eb2e1a4a8cd5a46205e3026e823e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
