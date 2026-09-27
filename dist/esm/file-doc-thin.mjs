export const name="file-doc-thin";
export const id="dl_64ffbf4e7c1b42bebae7";
export const url=new URL("../icons/file-doc-thin.svg?v=8204889fc93364de6c2f5d1b31e1fea94f7c7429b439e223cb3672fcf7d80064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
