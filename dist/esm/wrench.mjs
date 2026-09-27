export const name="wrench";
export const id="dl_ba82292aca52d4e40eb4";
export const url=new URL("../icons/wrench.svg?v=fe0608fac74106c44a4c8afc1381c17d05f2fea3404a2aac3c682438e11c788e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
