export const name="encrypted-fill";
export const id="dl_ebaffe627268223ccce0";
export const url=new URL("../icons/encrypted-fill.svg?v=258c9343b3aa36a770a4484704f4f1db6310ff8ff77ab79a131eec170f780c77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
