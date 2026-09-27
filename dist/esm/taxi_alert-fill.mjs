export const name="taxi_alert-fill";
export const id="dl_ac960c7e801ee322e0a5";
export const url=new URL("../icons/taxi_alert-fill.svg?v=b34574de278eb39476b9d0a1e2ec6945316b87b3e728e48e7ef8cd6ba74ab9bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
