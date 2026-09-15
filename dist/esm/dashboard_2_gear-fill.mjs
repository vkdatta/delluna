export const name="dashboard_2_gear-fill";
export const id="dl_373d97024346493cb351";
export const url=new URL("../icons/D/dashboard_2_gear-fill.svg?v=04695ddb172679927881c95b60ee60d2f510052cf26280fa2067093d647b5a26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
