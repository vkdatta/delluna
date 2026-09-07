export const name="tree-view-thin";
export const id="dl_bca14eac5631450da642";
export const url=new URL("../icons/T/tree-view-thin.svg?v=94c47c44d5797ca13b9a531c63caf3cd3d74e8fff7a7f5595ee80868bfbe30d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
