export const name="camera-duotone";
export const id="dl_52b4408358ce4a83afea";
export const url=new URL("../icons/camera-duotone.svg?v=2f928d725167d880244400dacd5181fee48178c815203667dd0ba2ba83de0c0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
