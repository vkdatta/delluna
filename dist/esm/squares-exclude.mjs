export const name="squares-exclude";
export const id="dl_4d8aa840f7d449d78961";
export const url=new URL("../icons/squares-exclude.svg?v=9ecefd165f9432553ddc8dfc403ce594883cd6757227fe94e0d50bc73966c4ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
