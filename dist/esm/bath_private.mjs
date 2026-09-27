export const name="bath_private";
export const id="dl_0f569a60d78759588ba6";
export const url=new URL("../icons/bath_private.svg?v=2e6b26db5c4eedaec7d87760c56acdf7842a245c7849b6f5e758354e90fd9ea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
