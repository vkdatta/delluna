export const name="shield-check";
export const id="dl_9fdaddb02cabce3edf2a";
export const url=new URL("../icons/shield-check.svg?v=056a30aa6cf39dde977e3ce4a2e1d4341ef433d4458cdb36fd8f99a9e47d2569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
