export const name="interactive_space-fill";
export const id="dl_e6373268e3639d26442f";
export const url=new URL("../icons/interactive_space-fill.svg?v=eecf701f3f58c1af776afe1425964fd95d87a93a0a901d1acb94bc9ed72ce99c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
