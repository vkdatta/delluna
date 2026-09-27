export const name="caret-down-light";
export const id="dl_4d3dbb1148364be29ee1";
export const url=new URL("../icons/caret-down-light.svg?v=8a0119149f0bbb9593c5233536f3983d325958e95ea3813f495601060c15cc7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
