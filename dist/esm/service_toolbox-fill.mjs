export const name="service_toolbox-fill";
export const id="dl_59e6a63ddaad4cb8bf0d";
export const url=new URL("../icons/service_toolbox-fill.svg?v=c6deeb7f574de5d36db2aafff6afcc9b124ced86a9c65a568e496a46fd46fd6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
