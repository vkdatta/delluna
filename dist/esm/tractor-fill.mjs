export const name="tractor-fill";
export const id="dl_4c869de6276f34543dd0";
export const url=new URL("../icons/tractor-fill.svg?v=d973e6a3d7fedbef69e19a1128d3f13d6fcff788ccfbcca234e14cafaa419709",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
