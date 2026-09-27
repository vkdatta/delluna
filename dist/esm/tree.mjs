export const name="tree";
export const id="dl_d82749885b68114ebc1c";
export const url=new URL("../icons/tree.svg?v=a4878c574c4ff8fcac43187573f5dfb4cb6788f709314eb47564e2ad6681980f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
