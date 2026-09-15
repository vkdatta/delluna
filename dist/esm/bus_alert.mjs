export const name="bus_alert";
export const id="dl_9512106b2f984fdca355";
export const url=new URL("../icons/B/bus_alert.svg?v=cebec401bdbdc38d9e0d47aa6868848b4f58679b48ac3ccc96df888206d05212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
