export const name="file-video";
export const id="dl_c81888ab21a8469cb9c8";
export const url=new URL("../icons/file-video.svg?v=e7364a0c8b32edddce3ff3674b295f3a991305318afef323a670270a256e1840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
