export const name="ssid_chart";
export const id="dl_0c60dd4d6fc143f9b38a";
export const url=new URL("../icons/S/ssid_chart.svg?v=d63de3bfc1f9e428c10fc176868f7451e03c92d9703ea30ee78f2640df035307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
