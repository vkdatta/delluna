export const name="arrows-split-bold";
export const id="dl_32a8dc1c8ec04139a4b8";
export const url=new URL("../icons/arrows-split-bold.svg?v=a3ca24d48c9de149b663c1e8b70a42b8b1effaadea5dc58a6a8ea259fb7a63eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
