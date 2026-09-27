export const name="video-camera-fill";
export const id="dl_92990f3cdd7cd40ae406";
export const url=new URL("../icons/video-camera-fill.svg?v=405e735dc37cf33ff0ac8ee67077d048e292b6d640776f3264ccc89675d4a16b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
