export const name="bird-light";
export const id="dl_f77255d827a44f9bb2bd";
export const url=new URL("../icons/bird-light.svg?v=27b6e94b223fff56c3f1ed4b9f77c30377ed3707e1bf9fcd7b627f19c642bb6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
