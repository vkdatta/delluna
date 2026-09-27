export const name="hospital-duotone";
export const id="dl_7cc6c610acaa45c5b7e1";
export const url=new URL("../icons/hospital-duotone.svg?v=c782317b46529f6134797bce6a6094bba1e4122868324cbcbf4ecf0bd54e2e77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
