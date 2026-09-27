export const name="heat_pump_balance";
export const id="dl_ccc09dcaf70eda1c8e7f";
export const url=new URL("../icons/heat_pump_balance.svg?v=1761e6d31181ac6c8e4c80f9da205f1629089636fc69c7025105b72305b1db20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
