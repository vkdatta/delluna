export const name="ungroup";
export const id="dl_0bfcc4db382e4d588cdb";
export const url=new URL("../icons/ungroup.svg?v=6903f0965ac9eec423dca45a62ebe6cdaf4db9d4ceea4e695da297d89538cfbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
