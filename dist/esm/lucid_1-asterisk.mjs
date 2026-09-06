export const name="lucid_1-asterisk";
export const id="dl_542ce640b5804a54af7c";
export const url=new URL("../icons/lucid_1-asterisk.svg?v=8ff0d8ed24a68d3a6677f863beeed5ac0e0d35a82af46d827c4b413b935bfda8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
