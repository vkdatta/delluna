export const name="lucid_1-alarm-clock-check";
export const id="dl_c538862e046d4a798091";
export const url=new URL("../icons/lucid_1-alarm-clock-check.svg?v=b97263e4834b311957c45b7391c91891c822430432759aeac31fd44ca93f3785",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
