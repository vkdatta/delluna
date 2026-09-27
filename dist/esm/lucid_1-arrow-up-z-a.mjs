export const name="lucid_1-arrow-up-z-a";
export const id="dl_37ce1c38dab34613bb11";
export const url=new URL("../icons/lucid_1-arrow-up-z-a.svg?v=9cf9a1362b89dade1cc89288533d45490437c9b895944596bfc3b5c9cdc849ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
