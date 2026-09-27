export const name="folder-simple-fill";
export const id="dl_8b6ce2fa91a146a08d85";
export const url=new URL("../icons/folder-simple-fill.svg?v=c1e8f540e281d84e30e30dd644a45ab1e1ba32ec420603ea96bbac8b46963d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
