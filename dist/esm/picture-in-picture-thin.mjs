export const name="picture-in-picture-thin";
export const id="dl_403a6decceff41febed9";
export const url=new URL("../icons/picture-in-picture-thin.svg?v=817263aa9822d462a457338267b407b3cc42079b3cb539100784c7bccd71eeb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
