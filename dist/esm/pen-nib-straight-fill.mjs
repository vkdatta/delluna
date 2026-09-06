export const name="pen-nib-straight-fill";
export const id="dl_3b8ba24c1021414f967c";
export const url=new URL("../icons/pen-nib-straight-fill.svg?v=0a3d646a5c2f2ef3b468f5a18e1a23d3cbc201d4105417fe9b5d1f1ea57917fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
