export const name="mouse";
export const id="dl_dde5ce350847289c8b99";
export const url=new URL("../icons/mouse.svg?v=5aa9589c045a70fd2836d76b8adcc68cc4a007466547bc3d2f5ae7dc06eb99fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
