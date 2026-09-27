export const name="line-segment-thin";
export const id="dl_7f35152c3d4a429d8e10";
export const url=new URL("../icons/line-segment-thin.svg?v=c1263f2edeb82e6e3b643717ba2734746744ccf6075d42a6fe89972055ffaab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
