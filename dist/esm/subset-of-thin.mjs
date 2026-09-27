export const name="subset-of-thin";
export const id="dl_d359d6a34c4f8e7adeed";
export const url=new URL("../icons/subset-of-thin.svg?v=e11437846ea34d3c098eb7f861e5c3d18a03d2f8fd2962fa59d3e050a3c9e529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
