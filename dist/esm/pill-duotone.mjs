export const name="pill-duotone";
export const id="dl_a00db75955624a80866d";
export const url=new URL("../icons/pill-duotone.svg?v=39430d5a7ec506aad1e216cc1ec45cba37a9eaa8b6f671afbf8590adc895e522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
