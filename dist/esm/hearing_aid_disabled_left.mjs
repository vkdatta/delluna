export const name="hearing_aid_disabled_left";
export const id="dl_af1afa506432ce8c042f";
export const url=new URL("../icons/hearing_aid_disabled_left.svg?v=8dce31347b0238115c6758baa93fe762feef13a218b95d5b203e047a2cdf9f1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
