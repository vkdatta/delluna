export const name="caret-line-left";
export const id="dl_e766ff4ad93546a8b52f";
export const url=new URL("../icons/caret-line-left.svg?v=ebd54b915c938cc74bba59b650b62967aff346ac8cbf4c4780cf8cc1a49a2911",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
