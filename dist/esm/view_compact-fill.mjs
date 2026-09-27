export const name="view_compact-fill";
export const id="dl_26152776afa386d013cc";
export const url=new URL("../icons/view_compact-fill.svg?v=c9680e51d95be8ccbca759a4d2d7734834ea57f36ae2c62cc4e28a46e956ed5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
