export const name="currency-eur-duotone";
export const id="dl_23bf7e1e00ef4f93a555";
export const url=new URL("../icons/currency-eur-duotone.svg?v=033b10f12eee174a59b7af6e36a021488e9287095541686e38b8b086837d6ae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
