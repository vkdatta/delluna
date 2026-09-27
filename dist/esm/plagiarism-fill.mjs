export const name="plagiarism-fill";
export const id="dl_b13f9f18f8f71d2875b5";
export const url=new URL("../icons/plagiarism-fill.svg?v=1e5516cfd50c7a85bf3335588ed27172a6506e5f587e01c92f0de7cc23aafc72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
