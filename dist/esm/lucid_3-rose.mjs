export const name="lucid_3-rose";
export const id="dl_94adbab717014cb0a3cf";
export const url=new URL("../icons/lucid_3-rose.svg?v=8c5ba0074676190770b4e4a495e3b2f1348380c5b4f8f18ccbb520a28d0ed17b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
