export const name="pill-thin";
export const id="dl_2e41fb7d17f848a0bd72";
export const url=new URL("../icons/pill-thin.svg?v=30af68789d267219ff633ded7a839cee10b15ad8dd6edb7df512ad5308148b5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
