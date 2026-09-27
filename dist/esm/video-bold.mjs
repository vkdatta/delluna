export const name="video-bold";
export const id="dl_24e29abdde1cf89ea5f5";
export const url=new URL("../icons/video-bold.svg?v=324e271b6701c931e19b1e0913e44e366eeb3782262f537ee5f4cca224ce4e23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
