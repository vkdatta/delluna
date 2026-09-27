export const name="castle-turret";
export const id="dl_e1837c5a4ce043b28f69";
export const url=new URL("../icons/castle-turret.svg?v=a83f891f67a7f5e11cf59326039f111671fdd2266d698a0370d69a34062fa2e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
