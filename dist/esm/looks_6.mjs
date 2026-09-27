export const name="looks_6";
export const id="dl_c00ab4ba790988c67bf9";
export const url=new URL("../icons/looks_6.svg?v=fb4e1d03de527d34c7956c3790df948b30fcd70ec36f75339e3cd0fd9944eb84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
