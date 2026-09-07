export const name="security-camera-fill";
export const id="dl_a19ed7376f554fbcad4f";
export const url=new URL("../icons/S/security-camera-fill.svg?v=f1ad2fbe6973d3c2d8cf16b725a19861da1207717a89466842f892762a3520d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
