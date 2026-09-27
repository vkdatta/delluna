export const name="arrow-square-up-right-light";
export const id="dl_7c1d4924be9e4f8ba09f";
export const url=new URL("../icons/arrow-square-up-right-light.svg?v=1c4c5342dbb70c9f3d2baaacd1330ee50a61603a98a601aed092326faf4bcf4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
