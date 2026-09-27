export const name="office-chair-fill";
export const id="dl_6837912b2c0c484aa437";
export const url=new URL("../icons/office-chair-fill.svg?v=d124a211d5e1b9b0dc5f4ddaf24bbd9bfb3bca3774fe8c9cfd18ce12a1e28628",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
