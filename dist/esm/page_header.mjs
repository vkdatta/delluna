export const name="page_header";
export const id="dl_bd6532b75d9d4c2ab5e7";
export const url=new URL("../icons/P/page_header.svg?v=5929cd6d7405757a02ac09c46c68e67b0cd5357930cacf9c26961ca5160744c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
