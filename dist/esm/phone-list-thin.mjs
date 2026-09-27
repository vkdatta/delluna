export const name="phone-list-thin";
export const id="dl_d43910219c7e48ad99ea";
export const url=new URL("../icons/phone-list-thin.svg?v=fee9c3e9427c85d851d0f1eca1f8d01a5bb7679a56b4d0b52397bb86f5b31614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
