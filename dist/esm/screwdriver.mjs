export const name="screwdriver";
export const id="dl_287da9df91c40334d6e5";
export const url=new URL("../icons/screwdriver.svg?v=e57ed0e37799af9136bc6d2fe72766f5009ac871b3d4e22e93d57776e2000829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
