export const name="folder-simple-dashed-bold";
export const id="dl_79406ed8df044443866b";
export const url=new URL("../icons/folder-simple-dashed-bold.svg?v=eddd42dd26f6b99a8bd7cf7e2e6d788edb5133ca235c31cabcbbd3aeed99d700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
