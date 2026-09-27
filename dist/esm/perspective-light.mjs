export const name="perspective-light";
export const id="dl_7a478f10893e43c3a81f";
export const url=new URL("../icons/perspective-light.svg?v=6f4257fcb584553a05fd361d582130d75554864790f0ebf371ee903672f08b14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
