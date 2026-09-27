export const name="face_shake";
export const id="dl_447d30f8f385f7e8b29f";
export const url=new URL("../icons/face_shake.svg?v=54e6946c18c521053b12e09e959bf94f2901232efecd954bb08a64282ff0d643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
