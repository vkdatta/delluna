export const name="exclude-duotone";
export const id="dl_dcdddade5f244d96ab71";
export const url=new URL("../icons/exclude-duotone.svg?v=bd20f8acd51a19171281de1c0a2fe2769815f5cefc7bf7e68f3ff5fbeb75ec60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
