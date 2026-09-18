export const name="align_start-fill";
export const id="dl_5fd38d8b87cf4d929e41";
export const url=new URL("../icons/align_start-fill.svg?v=1cfff22e90088aae85032ae57fe60993764884a7c5e3f8cbab9bc10ea345e139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
