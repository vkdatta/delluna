export const name="reset_tv-fill";
export const id="dl_768c71b86d5fc94328ff";
export const url=new URL("../icons/reset_tv-fill.svg?v=9f2ffbfba19e2433bf677743b36d61712da39b770878458e0885f7b1f9ec47d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
