export const name="cooking-pot";
export const id="dl_91ecbff169314cbab0e0";
export const url=new URL("../icons/cooking-pot.svg?v=d71df5053dd9c2737e63232df33fecfe13f79399951551404b9930c2a9d9fa66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
