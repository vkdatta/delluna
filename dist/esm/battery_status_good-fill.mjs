export const name="battery_status_good-fill";
export const id="dl_9111c45f3a768741050b";
export const url=new URL("../icons/battery_status_good-fill.svg?v=e5a3c0f1b2eea33dfe5b1ac72a2b7dd5355ab2f906f5454db92e0470ce84293d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
