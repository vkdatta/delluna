export const name="roller_skating";
export const id="dl_305ae07854bac7468614";
export const url=new URL("../icons/roller_skating.svg?v=e81f985d0a8f5e323e4db2f99afb1fe414c75c98f52b7afa2263795f13f741f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
