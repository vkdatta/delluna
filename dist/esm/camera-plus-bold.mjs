export const name="camera-plus-bold";
export const id="dl_631c0127b7684cb48ef2";
export const url=new URL("../icons/camera-plus-bold.svg?v=0ea6a12e58aee950fff37efbd504f60398f19d332a06d47b32060bd5b89cab80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
