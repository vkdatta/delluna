export const name="sensors_krx";
export const id="dl_2e091d904648931f4538";
export const url=new URL("../icons/sensors_krx.svg?v=851f4b3beaf2bbced81219a31c54c5c79faab30f249ad1c6f3a2a5f7a568033f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
