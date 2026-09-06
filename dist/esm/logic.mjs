export const name="logic";
export const id="dl_5126c9a196244508b412";
export const url=new URL("../icons/logic.svg?v=ddd27b2e4d342e89e0a5837caf7efefd2f3a5f4e285903fa44e16f37584e7441",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
