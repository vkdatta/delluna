export const name="app-window-light";
export const id="dl_3d4f3efc5ca04865ae58";
export const url=new URL("../icons/app-window-light.svg?v=f7803b3d7c7110f1ca406dd22a294f7447624de1a19f20919cc400ffc25763c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
