export const name="lucid_3-russian-ruble";
export const id="dl_520afd67b44845e89745";
export const url=new URL("../icons/lucid_3-russian-ruble.svg?v=508bd6d014c79583971b55456fa8b2434b18a6e3b5d26613490c8dc0f8c2c329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
