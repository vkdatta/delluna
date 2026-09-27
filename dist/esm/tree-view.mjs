export const name="tree-view";
export const id="dl_04f7813fd68fbdcfffb1";
export const url=new URL("../icons/tree-view.svg?v=e2e07e4ee39c5b18969a6708d0e31313f09224404bb17352ff65c8fbfbd3d147",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
