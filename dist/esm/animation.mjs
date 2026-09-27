export const name="animation";
export const id="dl_9a9ad25383b0232bafd8";
export const url=new URL("../icons/animation.svg?v=b4f735cb88c7ebbc1ee892761fe58fb1d64f2990a1793827a8320243c957ad22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
