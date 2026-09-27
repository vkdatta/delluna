export const name="lucid_2-funnel-plus";
export const id="dl_ef98dc96940a4de68a09";
export const url=new URL("../icons/lucid_2-funnel-plus.svg?v=07d11a176eaf2b4d4f698d01ef7f24644cac44b61b9ef7774f667b663291bacd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
