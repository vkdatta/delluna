export const name="seal-warning-thin";
export const id="dl_9930500611675653d705";
export const url=new URL("../icons/seal-warning-thin.svg?v=3937427837c5d4ce294e6ecba1e1b8a679c97111fcc50f06a7c86d84a35c5a57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
