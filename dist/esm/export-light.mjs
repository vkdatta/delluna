export const name="export-light";
export const id="dl_b3a543f22fe54263b727";
export const url=new URL("../icons/export-light.svg?v=22155f1804e255e1bed5808ce812c9f1b2b7d827c8ab765ded08c29c5a8feb64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
