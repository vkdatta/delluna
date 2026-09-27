export const name="taxi_alert";
export const id="dl_5b864eb45aef735ce957";
export const url=new URL("../icons/taxi_alert.svg?v=d60a533b6add4f3df8c3200a61dd27d9653502fe3ca4763b9efe10e9ecd7c1c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
