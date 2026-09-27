export const name="report_off";
export const id="dl_d133dd00d1bbd60f2847";
export const url=new URL("../icons/report_off.svg?v=1cd2cde0eda8eb4493dcae704dec205ddd852cf859d24b25409f887647eda925",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
