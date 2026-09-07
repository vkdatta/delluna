export const name="layers";
export const id="dl_d17526dcf10545de8806";
export const url=new URL("../icons/all_60_named_svgs/layers.svg?v=bf7ae4ccbf62d7d5882609b2e26e88773859e47230bdd6e947274f335a3f58d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
