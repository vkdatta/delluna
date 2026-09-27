export const name="expand";
export const id="dl_5f9d5917bd4a1d4b108e";
export const url=new URL("../icons/expand.svg?v=b15186b3780b253acd4503b5dc55f148b765eae593756d9c0748ca29b7906fdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
