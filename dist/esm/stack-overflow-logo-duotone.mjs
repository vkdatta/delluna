export const name="stack-overflow-logo-duotone";
export const id="dl_3aecff920bdf06f1fb92";
export const url=new URL("../icons/stack-overflow-logo-duotone.svg?v=9ece6b5e8d975748f77dce293f64e613429a0087cf757899632d7bcbbfc2c38a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
