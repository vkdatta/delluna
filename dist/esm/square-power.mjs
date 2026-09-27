export const name="square-power";
export const id="dl_e0e9f3c2255446c89e79";
export const url=new URL("../icons/square-power.svg?v=ebedc4c8bc86ec94b90f8123e792ec007eb59db968a3505eb307d96e93c8e2dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
