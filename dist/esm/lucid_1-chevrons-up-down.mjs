export const name="lucid_1-chevrons-up-down";
export const id="dl_6bb6cc67ca7343028dc6";
export const url=new URL("../icons/lucid_1-chevrons-up-down.svg?v=71f6c159de98dba4b3160e294ea720a0f1135012ea7276cf0bf40a75b9b484b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
