export const name="cast-fill";
export const id="dl_91ed6b28cbfe0975fddc";
export const url=new URL("../icons/cast-fill.svg?v=2a633ced2bbff48b225ffd175f5672d16e595532a0f0196927c637fd60ea961b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
