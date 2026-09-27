export const name="compass-rose-duotone";
export const id="dl_7daf52205b9b48a5ae70";
export const url=new URL("../icons/compass-rose-duotone.svg?v=4fb4501b63e43aee41d45a56bd7c75a6291ae00bf6bf24581d56da8b31abbc13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
