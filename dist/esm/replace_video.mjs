export const name="replace_video";
export const id="dl_cd70571571333097cad7";
export const url=new URL("../icons/replace_video.svg?v=83575ff34b41a0dc5ac452ed8c805a5b92aaf86563f32a6f603cce219e87c731",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
