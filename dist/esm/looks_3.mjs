export const name="looks_3";
export const id="dl_688ce011a6860659a0da";
export const url=new URL("../icons/looks_3.svg?v=010f5afa2bc5cc98c3ccf38ddd42f98920115d07204ea8a36868e88d3b53ade1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
