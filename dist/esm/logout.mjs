export const name="logout";
export const id="dl_dafbbc02e84e6cb746a5";
export const url=new URL("../icons/logout.svg?v=70eb6aebb9ef6781a8230a7a919714e88ce50f4c2168ae2bb35282aabf6bd982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
