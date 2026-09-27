export const name="sliders-horizontal-duotone";
export const id="dl_caf17c27b2561ef1def0";
export const url=new URL("../icons/sliders-horizontal-duotone.svg?v=31c9a214e93d75d070d0f893582433e4b760097e7ded51ff26536a947aac0b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
