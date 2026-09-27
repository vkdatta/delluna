export const name="user-circle-minus-thin";
export const id="dl_186223163cc3116f2a43";
export const url=new URL("../icons/user-circle-minus-thin.svg?v=8acdc3f5f32ac48508efe62d495c3fc75d2b9ab1e2c3985310bd498e4bef27a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
