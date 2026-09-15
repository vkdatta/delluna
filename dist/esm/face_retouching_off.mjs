export const name="face_retouching_off";
export const id="dl_ad9a840bdb994f3ab293";
export const url=new URL("../icons/F/face_retouching_off.svg?v=d4963e16e0bf551a01a2806781c2e53904fee78358a1a5c1ed256a21419f3975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
