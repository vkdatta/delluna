export const name="eject-simple-fill";
export const id="dl_e7e0953d05dc42c18b5e";
export const url=new URL("../icons/eject-simple-fill.svg?v=834927cfbb9a0de4d44e5249a21ebaa440250666fe9de3e619ccbeb899a54132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
