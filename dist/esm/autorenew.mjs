export const name="autorenew";
export const id="dl_980dcb23a6e91f77686b";
export const url=new URL("../icons/autorenew.svg?v=9b65dd5cb118e3866fc4896761ddbdfeed7c22a0689c9068b518224f11ee7bfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
