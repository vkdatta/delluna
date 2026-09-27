export const name="slideshow-thin";
export const id="dl_26c066c0099c08d55e66";
export const url=new URL("../icons/slideshow-thin.svg?v=1ca895bf2716778f5561d20941a98849585107789ac220d5e1f6b91cc0a9aa68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
