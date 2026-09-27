export const name="article";
export const id="dl_297af1e7b129522eaebb";
export const url=new URL("../icons/article.svg?v=2f28fa5e43f05a05287efd8920339b5dc45ed650177395125fbf0ccef66b6498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
