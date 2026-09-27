export const name="thermometer_loss";
export const id="dl_1effcac999eb07db14ba";
export const url=new URL("../icons/thermometer_loss.svg?v=4dba309c8084002d3ab81e08fc9d6258fd9ebfe922f78204579210a3ea18e064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
