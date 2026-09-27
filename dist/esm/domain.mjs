export const name="domain";
export const id="dl_6f374902811dfb16fd26";
export const url=new URL("../icons/domain.svg?v=8ce6ec24cf39d63712531e17bf27b78d2aa8e984d90668e7a70532fd0afb999f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
