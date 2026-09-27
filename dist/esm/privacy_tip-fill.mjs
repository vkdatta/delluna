export const name="privacy_tip-fill";
export const id="dl_c09573a187e419ea34b2";
export const url=new URL("../icons/privacy_tip-fill.svg?v=7eeb0cd6862a2ec314ecd275eff3d7759365d7326c16d922ceb8fc1a9d092ce8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
