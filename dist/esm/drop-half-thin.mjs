export const name="drop-half-thin";
export const id="dl_6cb196f5d38e4252ba9b";
export const url=new URL("../icons/drop-half-thin.svg?v=e0e24f7d0fca5d312656deba367c15813f4ada0d2a14c072444f0ada507b785d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
