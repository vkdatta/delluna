export const name="lucid_2-folder-git";
export const id="dl_1ef330e1a14a4ada9581";
export const url=new URL("../icons/lucid_2-folder-git.svg?v=8da5634275432e7013e050e390d99b0300fe677182fed920c23e82458df193ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
