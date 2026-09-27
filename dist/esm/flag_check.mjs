export const name="flag_check";
export const id="dl_765cf75e4e3f289aad06";
export const url=new URL("../icons/flag_check.svg?v=fb9a5c8a67005d470adeb29f927f114a48613bed795f88844d7ad7931a204c03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
