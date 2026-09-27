export const name="wifi_find";
export const id="dl_27c1e758b3caa41a1139";
export const url=new URL("../icons/wifi_find.svg?v=e522f3b98672ecfc72ca24da7d926fcfe2a0a77a07fba6bffa26f253f2b5b45e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
