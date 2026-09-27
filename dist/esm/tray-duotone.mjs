export const name="tray-duotone";
export const id="dl_20d0428e19fe5efdb87d";
export const url=new URL("../icons/tray-duotone.svg?v=6826128965cf61f9a681f9a6fbdc86d4609a629388ed6249eb56700ffb47f733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
