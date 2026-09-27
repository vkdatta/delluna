export const name="folders-thin";
export const id="dl_a4079b3a2a744ed48de1";
export const url=new URL("../icons/folders-thin.svg?v=b1da6833a21ca8d545940d9e0ce9ea527446467f9aeab6b9305fd54b97452690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
