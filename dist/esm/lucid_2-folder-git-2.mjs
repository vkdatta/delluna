export const name="lucid_2-folder-git-2";
export const id="dl_d7261cf68c0c409ca0d1";
export const url=new URL("../icons/lucid_2-folder-git-2.svg?v=6901de805aaa955c8282086fb86ac2acfa89dd44939ec7e9713b7f6168b99b1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
