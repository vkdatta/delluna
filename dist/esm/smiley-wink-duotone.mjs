export const name="smiley-wink-duotone";
export const id="dl_1dc3911663f0834b4ef7";
export const url=new URL("../icons/smiley-wink-duotone.svg?v=186e90ed65046cca244963ecb54e919697d1331daef9578254353f984cc1b7cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
