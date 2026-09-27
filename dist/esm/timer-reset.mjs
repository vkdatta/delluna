export const name="timer-reset";
export const id="dl_8034a58b3095446dad68";
export const url=new URL("../icons/timer-reset.svg?v=b257c42d567bbf243a25f3b3ba9bb3bb36bec5441113faefea147a7c64072765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
