export const name="iframe_off";
export const id="dl_5c30741860f993110250";
export const url=new URL("../icons/iframe_off.svg?v=2c8011c1ae3d0131257b536fe5d4f2df7196ddd373d77f2d48687e0b0d9528c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
