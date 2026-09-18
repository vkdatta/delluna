export const name="mms-fill";
export const id="dl_53b0324fa106485a99da";
export const url=new URL("../icons/M/mms-fill.svg?v=6511850901afcc9aa9cd9547103817a53a7238a0589facd7d250240d62e22ef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
