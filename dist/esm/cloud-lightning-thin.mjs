export const name="cloud-lightning-thin";
export const id="dl_ee9663f6a9244721826a";
export const url=new URL("../icons/cloud-lightning-thin.svg?v=f7d1e89ccdea6b9f35aeb95228d5531add470576589ed92811de47773fbdb1a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
