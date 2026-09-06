export const name="cloud-rain-thin";
export const id="dl_cc7e427f2bb74bc68970";
export const url=new URL("../icons/cloud-rain-thin.svg?v=9ceacd3c1ed9a94782b8ee3f6fdaa47164f3a1cc5b4b11ef4013e7f02882cc3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
