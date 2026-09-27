export const name="lucid_2-folder-git";
export const id="dl_1ef330e1a14a4ada9581";
export const url=new URL("../icons/lucid_2-folder-git.svg?v=5bc4cb499075e1acb0090fff43302c4813907ad3cad4a56654ee07d264a7935e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
