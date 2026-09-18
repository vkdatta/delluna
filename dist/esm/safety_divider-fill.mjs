export const name="safety_divider-fill";
export const id="dl_aedbeccae7e4488d9a0c";
export const url=new URL("../icons/S/safety_divider-fill.svg?v=ddb9772a9c035acbb60606364aaf59c35aab04ea65ade7a784c1f59433c6efb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
