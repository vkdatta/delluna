export const name="phone_missed-fill";
export const id="dl_99b03cb1d0924a20883d";
export const url=new URL("../icons/phone_missed-fill.svg?v=a619f0d7c92a7d8cd39bb6054b261850b88f5abe2c21e6fa9d911cbdff8d00ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
