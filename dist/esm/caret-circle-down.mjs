export const name="caret-circle-down";
export const id="dl_223adce4cd5c48ef90c0";
export const url=new URL("../icons/caret-circle-down.svg?v=9c237a0849b5adc23f6cd0683e5479b48b86a8fda5693f888879382514b4117f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
