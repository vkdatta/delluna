export const name="eraser_size_4-fill";
export const id="dl_9e17335631e478b100ea";
export const url=new URL("../icons/eraser_size_4-fill.svg?v=4ac48decd69b2311882b445b15ac381a12827d814a3a084eae235d1a4144b64f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
