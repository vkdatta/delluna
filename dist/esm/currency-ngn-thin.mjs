export const name="currency-ngn-thin";
export const id="dl_17297fa9d5f64df99fa2";
export const url=new URL("../icons/currency-ngn-thin.svg?v=9a3b4c52c49a004593192c563ee0eb02b0bda8160e6fe1bd4334e4ce9b7556b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
