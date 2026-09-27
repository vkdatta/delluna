export const name="lucid_3-shrink";
export const id="dl_1547d5f02fdf4c438c5b";
export const url=new URL("../icons/lucid_3-shrink.svg?v=0de67c4f33a266578b4f4bf909b58c279c57b153ee8005c718eb3eedb6c3d847",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
