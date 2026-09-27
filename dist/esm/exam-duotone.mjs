export const name="exam-duotone";
export const id="dl_572863321dde4db99836";
export const url=new URL("../icons/exam-duotone.svg?v=214085cb297ce21b09c00c0bc6426fbd8bf5cd6c6f2eb66496eaa0e151b68123",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
