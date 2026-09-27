export const name="compass-rose-duotone";
export const id="dl_7daf52205b9b48a5ae70";
export const url=new URL("../icons/compass-rose-duotone.svg?v=399002df5af01ba0c3df977cb7bf38050f42f78cbc2a3fa69c854aacdd05e179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
