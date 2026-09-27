export const name="counter_9";
export const id="dl_b7abc6ac17ddbf5af0ac";
export const url=new URL("../icons/counter_9.svg?v=426245e4877b17c8c1fd3b01e39440d48a339ba9174a57e4c05d3153c1ad0d63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
