export const name="watch_vibration-fill";
export const id="dl_3be90ec45abf7a9beeaa";
export const url=new URL("../icons/watch_vibration-fill.svg?v=73391718ce04d8794d4b644a43251ad8abc72edfb3d0d179cb5ea02e3e782c56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
