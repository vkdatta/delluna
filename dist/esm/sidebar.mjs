export const name="sidebar";
export const id="dl_41dfe34349004a24a5e0";
export const url=new URL("../icons/S/sidebar.svg?v=d919f2b3fcfeae9a4ef61fba45f54e7d343ada48628585e38c5675782c6247ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
