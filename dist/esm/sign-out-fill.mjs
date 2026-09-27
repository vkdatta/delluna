export const name="sign-out-fill";
export const id="dl_4ee86fc9719405f79e12";
export const url=new URL("../icons/sign-out-fill.svg?v=17178eb21e80e920691b8e43336b9840fda33d17d4bdeec3389aeee3b0a46a09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
