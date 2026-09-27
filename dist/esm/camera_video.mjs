export const name="camera_video";
export const id="dl_1beb76fabb79c85a3534";
export const url=new URL("../icons/camera_video.svg?v=0960d6a2362914e1973c6308b2b138cec4696ba4070a460961541dd8f534c792",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
