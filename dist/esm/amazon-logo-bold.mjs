export const name="amazon-logo-bold";
export const id="dl_cd3d949dbc9044ae9266";
export const url=new URL("../icons/amazon-logo-bold.svg?v=aa6bf60d56bd8323215c72dbfc8fc89a694cf6f6125f0fd9f03c1c961b3d7fcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
