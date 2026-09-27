export const name="cancel_presentation";
export const id="dl_4b9201a9f91d386d5541";
export const url=new URL("../icons/cancel_presentation.svg?v=56e68d6606b965ab296d99acee1ea4ee382ef3214c1d0865fac04c764b38e54f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
