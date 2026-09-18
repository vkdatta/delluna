export const name="coronavirus-fill";
export const id="dl_88bef4a4cdeb41f59e55";
export const url=new URL("../icons/coronavirus-fill.svg?v=7b2e12edc5d8abd82fe3304c019790ba63be516e71a89d13eb47b0b0170ba466",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
