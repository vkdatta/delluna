export const name="border_right";
export const id="dl_1470d3d6bcd29454e179";
export const url=new URL("../icons/border_right.svg?v=d33f65f9e7d6343091f548b79f251b5e86777d7a8185438c842c3db7c9a8ab08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
