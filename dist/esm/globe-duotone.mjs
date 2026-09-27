export const name="globe-duotone";
export const id="dl_ad655480699e4245879c";
export const url=new URL("../icons/globe-duotone.svg?v=c121e2ba16684a938674f521133989d6847257a5de869392e8798104010d393e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
