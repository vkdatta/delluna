export const name="folder_match-fill";
export const id="dl_9110b311c739f111c212";
export const url=new URL("../icons/folder_match-fill.svg?v=d712314ca807dc61ea9be0e7d242d77d6bc13e36b6c9d90c51a0ce722dc52583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
