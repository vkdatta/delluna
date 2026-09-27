export const name="face_3";
export const id="dl_780f7440c19fbe616647";
export const url=new URL("../icons/face_3.svg?v=cd704319b881157eff6aa668e543a9b4f5149b92bdbe9102638923ed9ab0d5cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
