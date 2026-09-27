export const name="tent-tree";
export const id="dl_5658cc8913fb4c32bf81";
export const url=new URL("../icons/tent-tree.svg?v=74c2b51a102a3adf9cfe92ef7795394c1bd90d23ee79fecedc81ae04647f83b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
