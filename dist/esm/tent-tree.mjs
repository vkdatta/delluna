export const name="tent-tree";
export const id="dl_5658cc8913fb4c32bf81";
export const url=new URL("../icons/tent-tree.svg?v=c246eb0409ee7e8e3b236b05ae449ed31d948340c2a1c45588a58eef46bffc51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
