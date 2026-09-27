export const name="warehouse-duotone";
export const id="dl_c170dd2ef6240aa5a62b";
export const url=new URL("../icons/warehouse-duotone.svg?v=7cc20797ffceb0873e9a955cfb2f33b59ebeae469705df96d249f4384b6d5371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
