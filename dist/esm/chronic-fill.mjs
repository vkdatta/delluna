export const name="chronic-fill";
export const id="dl_7e0ddd224edd8232dbd8";
export const url=new URL("../icons/chronic-fill.svg?v=151663d956becf25b3b96249c7a344c2e207c27372ae566a4d186e109e21c151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
