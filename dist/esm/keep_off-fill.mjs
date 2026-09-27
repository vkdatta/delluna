export const name="keep_off-fill";
export const id="dl_47104cb1eee13ecf3642";
export const url=new URL("../icons/keep_off-fill.svg?v=76a55d12e70ce2c801aa57e156320a29327349c8133718be55258fd304dfc863",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
