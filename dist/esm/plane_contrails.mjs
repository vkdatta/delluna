export const name="plane_contrails";
export const id="dl_2da866d55e1377f24a75";
export const url=new URL("../icons/plane_contrails.svg?v=1b1357ff7409c6b16033c9f0dc46c1220bf9fdaf0af6ff50ce879bfc2d249082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
