export const name="lucid_1-calendar-1";
export const id="dl_9efa12189ca64c24b6f8";
export const url=new URL("../icons/lucid_1-calendar-1.svg?v=81d3241e64f19776b04ef12bdc7d6f8b28f1b3780c92191cc66aace1ce03d93a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
