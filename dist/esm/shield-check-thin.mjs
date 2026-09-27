export const name="shield-check-thin";
export const id="dl_e3283a08ededbcd73d33";
export const url=new URL("../icons/shield-check-thin.svg?v=8d176af289b2bc58c41946586650c902383c5b788dcd76bdfaef4f8d95ad352f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
