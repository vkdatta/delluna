export const name="lucid_1-caravan";
export const id="dl_a53fe46f25ea4e6fb0df";
export const url=new URL("../icons/lucid_1-caravan.svg?v=09d273fc6c15aa87d194e3f468cd870d8113c7feb8c175f81277e77cb4668309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
