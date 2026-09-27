export const name="tote";
export const id="dl_3f4466e83c65685e34c0";
export const url=new URL("../icons/tote.svg?v=d07960496c8d1cf20b21d320b7fc3a71d44ebc60829ba6b2809792db645bcf88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
