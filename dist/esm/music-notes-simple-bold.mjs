export const name="music-notes-simple-bold";
export const id="dl_bcfab291e18440c185e5";
export const url=new URL("../icons/music-notes-simple-bold.svg?v=e4a6aa91a5c43fc054063bd76f23aa781c764239808c9893672a9c5d29416f65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
