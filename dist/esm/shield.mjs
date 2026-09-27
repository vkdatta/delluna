export const name="shield";
export const id="dl_396bf0c590f546ee176a";
export const url=new URL("../icons/shield.svg?v=28e65793aff41f423a06b1717599afcaecb00586a1ae4f0aa4685d2638021cdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
