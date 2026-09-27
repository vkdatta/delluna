export const name="lighthouse";
export const id="dl_067df8e5b248407580df";
export const url=new URL("../icons/lighthouse.svg?v=136dd6e9b0364d7d1bfac4285765a248ff87e14d6e2f5d1b953b5eb8b8d70b5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
