export const name="google-photos-logo-duotone";
export const id="dl_aabd62937eb64687b913";
export const url=new URL("../icons/google-photos-logo-duotone.svg?v=1cfd8df3afb1e828ee1a8370b03b0ddbe2a4b96eea3db2cc545a24360970fe74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
