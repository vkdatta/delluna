export const name="camera-thin";
export const id="dl_27cc54686d0244498989";
export const url=new URL("../icons/camera-thin.svg?v=48d0b762f793386e1346b64d9f6981b012ea167816f4d5a1c5be30a96de47aed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
