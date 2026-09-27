export const name="microsoft-word-logo-bold";
export const id="dl_9558eac3c4c34cbe8556";
export const url=new URL("../icons/microsoft-word-logo-bold.svg?v=bdaedf035eccb913b1d66560b04c382a5423a00e83b6898ebae6106fd1bac7ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
