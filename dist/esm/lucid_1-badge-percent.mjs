export const name="lucid_1-badge-percent";
export const id="dl_8020aa52a30947cda08e";
export const url=new URL("../icons/lucid_1-badge-percent.svg?v=bbcbf73cbe0bf5a1facd58ca6e833bf08444d194ab94c7768380de78d68fb525",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
