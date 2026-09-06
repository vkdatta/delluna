export const name="identification-card-thin";
export const id="dl_a3e309160487449196c8";
export const url=new URL("../icons/identification-card-thin.svg?v=19fdffcc3295afafc8e83be078bcfccd4be236cc98fc241a40dd034d08db34d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
