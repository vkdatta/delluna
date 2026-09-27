export const name="lucid_2-ellipsis-vertical";
export const id="dl_9b96c2d1fa304bd48a05";
export const url=new URL("../icons/lucid_2-ellipsis-vertical.svg?v=fa3c598616fac305572cea1d4721ed39966a4fb3f5b4e1c82c621b6187dce525",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
