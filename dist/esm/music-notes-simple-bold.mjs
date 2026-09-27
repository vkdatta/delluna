export const name="music-notes-simple-bold";
export const id="dl_bcfab291e18440c185e5";
export const url=new URL("../icons/music-notes-simple-bold.svg?v=f507d902685f1b11b0b0e3d3d120bcd69b0e7aa793c19a70353f1316d6208398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
