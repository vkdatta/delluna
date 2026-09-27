export const name="mystery-fill";
export const id="dl_635fcc9e5493ed77530c";
export const url=new URL("../icons/mystery-fill.svg?v=83d65b654add1b125f7beabe86a9286b1a81c2dd0379a93c4b3e061b29ee3ef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
