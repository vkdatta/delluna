export const name="weight";
export const id="dl_2de7b198099946519105";
export const url=new URL("../icons/weight.svg?v=8da1d161209a020401bb81974965b459f11aef56bc2de4fe41e2e051a6b967aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
