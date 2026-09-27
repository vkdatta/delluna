export const name="shield_lock-fill";
export const id="dl_84d6efb823e5ff376733";
export const url=new URL("../icons/shield_lock-fill.svg?v=006e3b25b5b79fc8535683419b830bbe7931e68392363a31a1158856c23cfc01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
