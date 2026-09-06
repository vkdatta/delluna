export const name="file-jpg-bold";
export const id="dl_bb10b2f3eea94d73ae1b";
export const url=new URL("../icons/file-jpg-bold.svg?v=3793e260c950300374e7da77d50e693b5de490e1a7ed7d34d1b06ed89cb32158",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
