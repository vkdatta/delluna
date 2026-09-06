export const name="ear-duotone";
export const id="dl_df196144f3694bf1b806";
export const url=new URL("../icons/ear-duotone.svg?v=dc0f31f132022269b4f603fd8f5df2dc4e9a6b8a9157757a751cf00138fe4ff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
