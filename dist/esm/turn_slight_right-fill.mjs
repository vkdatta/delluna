export const name="turn_slight_right-fill";
export const id="dl_03ad20fb19194f56ad4e";
export const url=new URL("../icons/T/turn_slight_right-fill.svg?v=205a69b1ce9b7a342b6ae65b2b7165128d5ff15ca51a17a29139e1239b801c09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
