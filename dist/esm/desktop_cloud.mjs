export const name="desktop_cloud";
export const id="dl_30db4a9c9499fb44eb45";
export const url=new URL("../icons/desktop_cloud.svg?v=552afc5b02493843b5b1df70ea03374e1a9dc163d269e1d3b894a7a4d2436e13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
