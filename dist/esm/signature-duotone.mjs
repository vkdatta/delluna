export const name="signature-duotone";
export const id="dl_a2fd7e14e8ff752fc846";
export const url=new URL("../icons/signature-duotone.svg?v=caa99e393af6ddfe431e2881f7618e576ba6a6e7c42f7bb46e2acdb9357b0661",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
