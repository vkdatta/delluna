export const name="lock_reset";
export const id="dl_81343f597046dd7f4bb0";
export const url=new URL("../icons/lock_reset.svg?v=ff9a099f6508a40788785a072728f35b98c36770e81f50dab52ce109ba4c0461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
