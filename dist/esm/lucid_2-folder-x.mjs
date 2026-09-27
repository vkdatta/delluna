export const name="lucid_2-folder-x";
export const id="dl_454974821fb04eb8bd07";
export const url=new URL("../icons/lucid_2-folder-x.svg?v=63f00f61c7b4cafce6aed92ad4367f5f5440289573310a558f875372d620ed19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
