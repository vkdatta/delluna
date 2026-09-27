export const name="paragraph-thin";
export const id="dl_5fa201f8fed842f3b3ff";
export const url=new URL("../icons/paragraph-thin.svg?v=1dc61ac1701c100746ebba586393e87ec9799b1e591adf525128f2853d1b2bc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
