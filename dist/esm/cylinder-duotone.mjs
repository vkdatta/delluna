export const name="cylinder-duotone";
export const id="dl_81aa91dbe0fd45bebf2b";
export const url=new URL("../icons/cylinder-duotone.svg?v=23983f626073dd6e45ce2881e1907133c8f8e8ad8ba31120c23083a05419cf8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
