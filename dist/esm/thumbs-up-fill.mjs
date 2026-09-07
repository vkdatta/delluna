export const name="thumbs-up-fill";
export const id="dl_84ffb2d815fc4cedae5c";
export const url=new URL("../icons/T/thumbs-up-fill.svg?v=8f4f7abf9fb987ec8c5b22b627679d08ae6283ca80586b8f9d95d0f4f457efb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
