export const name="lucid_1-boxes";
export const id="dl_d5aaad6734fc40549dae";
export const url=new URL("../icons/lucid_1-boxes.svg?v=b76f12dbbadaf732e98f02c8cea8c5ae853ec9c57c715d29220aaef247e42a60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
