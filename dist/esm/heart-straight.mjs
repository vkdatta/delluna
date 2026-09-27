export const name="heart-straight";
export const id="dl_e58c84db80e3455dba6d";
export const url=new URL("../icons/heart-straight.svg?v=58889599d58db1af2fd11e409eea52fe9141088ce7cf117f5b908ade56be78ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
