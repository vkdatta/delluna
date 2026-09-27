export const name="lucid_1-archive-restore";
export const id="dl_3c9427ec62294c9a844d";
export const url=new URL("../icons/lucid_1-archive-restore.svg?v=9e0f6e4a8745118ee87cee206bcc8e111f5b04a1314abca0a805449d34e7232a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
