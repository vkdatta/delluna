export const name="lucid_1-archive-restore";
export const id="dl_3c9427ec62294c9a844d";
export const url=new URL("../icons/lucid_1-archive-restore.svg?v=93985272929efac3a95d031ada1a7a9c0b78a1273d08c8cc7d2b8239b000bb26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
