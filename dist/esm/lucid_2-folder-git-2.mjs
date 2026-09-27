export const name="lucid_2-folder-git-2";
export const id="dl_d7261cf68c0c409ca0d1";
export const url=new URL("../icons/lucid_2-folder-git-2.svg?v=f6a845e40aee79bbc5b14fc4d3b82bdcac15e802b75e54dd56d7e030a011fa69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
