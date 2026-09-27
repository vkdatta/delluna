export const name="face_left-fill";
export const id="dl_7ce1acae22b560199c88";
export const url=new URL("../icons/face_left-fill.svg?v=89cd8a6dd07fd0a210fd9b9fcdbf35eece1e87f644317d10373493f15534de60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
