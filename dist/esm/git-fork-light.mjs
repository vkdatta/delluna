export const name="git-fork-light";
export const id="dl_6975c780cd6646fb91b5";
export const url=new URL("../icons/git-fork-light.svg?v=28573c9d5faa6588204951b7b6097bcabd7b92ebdc4b19ffa76e85fa29710c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
