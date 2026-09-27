export const name="telegram-logo";
export const id="dl_ba5c90a6acfbb19d6114";
export const url=new URL("../icons/telegram-logo.svg?v=cf21490571f24a1804b954a7dbd7e5c7427bebe215ab590a7312cf4fac4b6ba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
