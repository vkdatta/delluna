export const name="file-jpg-bold";
export const id="dl_bb10b2f3eea94d73ae1b";
export const url=new URL("../icons/file-jpg-bold.svg?v=b73fdb5b0e68170f2027eeb678874618d275757a4dd141ca978a3b22be4494a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
