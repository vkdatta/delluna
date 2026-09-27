export const name="face_3-fill";
export const id="dl_6f06cd1c4c3e85b73a1e";
export const url=new URL("../icons/face_3-fill.svg?v=8086ea91e090e2438e7512696fb6dc3f912699adc66ee731c893acce2ce45c4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
