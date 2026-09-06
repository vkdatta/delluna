export const name="git-merge-duotone";
export const id="dl_9501bf5e674b41ed8d80";
export const url=new URL("../icons/git-merge-duotone.svg?v=857faf097467f61f2a10f07244ac2c7b7fe2fabf53fc2b1dcc8f67ad5b7eea6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
