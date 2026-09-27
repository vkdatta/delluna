export const name="lucid_2-drafting-compass";
export const id="dl_bd628def0e5f468c9847";
export const url=new URL("../icons/lucid_2-drafting-compass.svg?v=e9a170fe686ca0488261eda877e6d32b431ca77a53c781963db9420833016b30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
