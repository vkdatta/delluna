export const name="4g_mobiledata";
export const id="dl_af075865e65a5ebea6ed";
export const url=new URL("../icons/4g_mobiledata.svg?v=aa7563d78750914fb69105521c5ebb646fb210d87be137d2d20a4a33616b592f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
