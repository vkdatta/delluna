export const name="sync-fill";
export const id="dl_97e65f1f070abb45b755";
export const url=new URL("../icons/sync-fill.svg?v=bbda78f2d68141dbb1c75ae6adfd04ab47eee4d0e16ee31fab5fe0c57e01bf23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
