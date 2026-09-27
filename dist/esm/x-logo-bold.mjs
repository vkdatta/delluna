export const name="x-logo-bold";
export const id="dl_35d2654a1a36598ee5ab";
export const url=new URL("../icons/x-logo-bold.svg?v=b21db2dd29f5fccb70cec9c27917fb8eb1b2661677858daad33afdf834325177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
