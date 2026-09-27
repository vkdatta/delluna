export const name="heart-straight";
export const id="dl_e58c84db80e3455dba6d";
export const url=new URL("../icons/heart-straight.svg?v=3bf087cb616157b6bf58ade4e3b86a044e59f22930b3a70605914ca079099bc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
