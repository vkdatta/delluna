export const name="finn-the-human-bold";
export const id="dl_63ce9c51e2114c32a6a3";
export const url=new URL("../icons/finn-the-human-bold.svg?v=a796af0fe63496801a232f286572b2af29ffda1287c1249d2ea8379b3bbffb1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
