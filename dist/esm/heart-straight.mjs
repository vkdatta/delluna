export const name="heart-straight";
export const id="dl_e58c84db80e3455dba6d";
export const url=new URL("../icons/heart-straight.svg?v=963625c139c3b54021fbce148fbbcb13d7cca06e19f65215c92cba72e37fa205",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
