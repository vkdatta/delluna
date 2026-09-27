export const name="arrow-u-left-up-duotone";
export const id="dl_c92d02a73150426cbedc";
export const url=new URL("../icons/arrow-u-left-up-duotone.svg?v=0725b27db8f1e39f26ac4adcabcd139f536ba7041625bc59e6e1b0d577daf4ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
