export const name="experiment-fill";
export const id="dl_77ddd2b1743ac0ab58b3";
export const url=new URL("../icons/experiment-fill.svg?v=ebc18e06ce4121875dd91979099e13788780aae834e05ed14c0b5b326a5f09cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
