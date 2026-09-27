export const name="lucid_3-spline";
export const id="dl_8b0bdc8c7451471d91d1";
export const url=new URL("../icons/lucid_3-spline.svg?v=e3e298f42d921937a958c2ad586d06184ff68ada34565948fc1709b44f8f9cc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
