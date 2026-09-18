export const name="airline_stops-fill";
export const id="dl_1105a1356e2f47e09289";
export const url=new URL("../icons/airline_stops-fill.svg?v=ac5db0b368533568af01a97aa1c7e5905536cf81755fe763f3b80c882f9db4ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
