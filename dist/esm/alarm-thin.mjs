export const name="alarm-thin";
export const id="dl_981b92b68ca044b09534";
export const url=new URL("../icons/alarm-thin.svg?v=53453519207a73120b57810405815b23125a9b14b850adb11d5ef146715724ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
