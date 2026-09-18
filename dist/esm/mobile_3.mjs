export const name="mobile_3";
export const id="dl_0560431abb33445fb15a";
export const url=new URL("../icons/mobile_3.svg?v=c9d2f979f57c9c6fd6535fb98c653e5a4a03f3cf865a959e8b6cf17e8eec89b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
