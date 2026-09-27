export const name="link-simple-horizontal-thin";
export const id="dl_fafeed5a059a490782f6";
export const url=new URL("../icons/link-simple-horizontal-thin.svg?v=698ceb5383cb4902c8ae337e4f8b6404769987565ad80a661d9886dfda49fda6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
