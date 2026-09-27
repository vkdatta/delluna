export const name="stop";
export const id="dl_eef10eae842799cbaf62";
export const url=new URL("../icons/stop.svg?v=f5f5fff0412dd1240bc9ff577161d41878555396f5d71d0a142d57e19ceb9cc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
