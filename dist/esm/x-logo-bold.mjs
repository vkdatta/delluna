export const name="x-logo-bold";
export const id="dl_1ccd578470fc43d6a2a2";
export const url=new URL("../icons/X/x-logo-bold.svg?v=b21db2dd29f5fccb70cec9c27917fb8eb1b2661677858daad33afdf834325177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
