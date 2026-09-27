export const name="arrow-square-up-fill";
export const id="dl_f96f289bb51c4105a4c2";
export const url=new URL("../icons/arrow-square-up-fill.svg?v=edf749b622113de7f873023a40073439f6b13387fc47a255983f2d3bbde517b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
