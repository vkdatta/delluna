export const name="table-light";
export const id="dl_2eb2148fff0c47638854";
export const url=new URL("../icons/table-light.svg?v=d84092206eb8ebafc227c088e435d08869d691a2c63552e77209b2acba494ddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
