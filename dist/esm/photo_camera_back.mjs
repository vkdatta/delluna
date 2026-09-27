export const name="photo_camera_back";
export const id="dl_0e4dbae37ead6ba0e1c7";
export const url=new URL("../icons/photo_camera_back.svg?v=f1f17a2a3bfa389a8478106afc725eda0927e1a5100c42b5cb087b5a875c400c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
