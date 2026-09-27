export const name="speaker_phone-fill";
export const id="dl_af3195a2d1658bc33fa2";
export const url=new URL("../icons/speaker_phone-fill.svg?v=f94d2e62f72f6a6b53dc7384594d1ed5b870bb3893c604f3f800e7b4f1f71061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
