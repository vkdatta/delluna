export const name="article-medium-light";
export const id="dl_92bdd0efb9eb40ccb764";
export const url=new URL("../icons/article-medium-light.svg?v=bcf7b8761905e019e44c9b3fa6cde341232446aa3acebed567726df219eb9026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
