export const name="copyleft-bold";
export const id="dl_12e4aac573f84286a232";
export const url=new URL("../icons/copyleft-bold.svg?v=ea62ad55cdd352c04fa1cc9d6f32a55b06005f876c925fa2b977ec764ff4d855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
