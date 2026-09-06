export const name="file-txt-thin";
export const id="dl_06b73ee8bbf641e4890a";
export const url=new URL("../icons/file-txt-thin.svg?v=969391039f7f733220ffab33b6d4c865e2e5738db8e307a0ff711b0352db05dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
