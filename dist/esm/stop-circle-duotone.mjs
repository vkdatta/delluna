export const name="stop-circle-duotone";
export const id="dl_1412b9bb4cdf440d83fc";
export const url=new URL("../icons/S/stop-circle-duotone.svg?v=58a5766b209c0ea0d75d54265c192a5dd465d1fe48fd4ed6bc5ec378231bc370",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
