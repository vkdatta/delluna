export const name="mouse-middle-click-bold";
export const id="dl_91865468954c4729a6c4";
export const url=new URL("../icons/mouse-middle-click-bold.svg?v=089b0cdb0b9815beeb2b28a84893a26950d36aec87712f8993e414c8a7a0703c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
