export const name="task";
export const id="dl_ba2c8f9bd2c396b81f67";
export const url=new URL("../icons/task.svg?v=0be32b395ac9ca3ca10078e23bf53d41c419f431d6fdaadea97788e08247440e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
