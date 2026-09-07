export const name="lucid_1-biceps-flexed";
export const id="dl_b3d6e2ece22a4ea1a31d";
export const url=new URL("../icons/lucid_1-biceps-flexed.svg?v=6d9c5aa79ed148d982d5fbf4aee99ce1cba152ba7e6719f7a1488c9708b2a8c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
