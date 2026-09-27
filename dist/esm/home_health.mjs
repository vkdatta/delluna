export const name="home_health";
export const id="dl_1ba1c442d721529dd381";
export const url=new URL("../icons/home_health.svg?v=1f61c4115117ccec7ba6847b5215ed50aa0dd832e48dcbf018cdc1c28f672673",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
