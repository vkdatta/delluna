export const name="lucid_1-battery-charging";
export const id="dl_a077ea59e095451fa5cd";
export const url=new URL("../icons/lucid_1-battery-charging.svg?v=4ab2cd0bf3f8ca0ae0d8db9c22d6c7f5432dc0843bb291eebd295270c0845b3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
