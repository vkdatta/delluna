export const name="chips-fill";
export const id="dl_5c3d15233120b7461f3f";
export const url=new URL("../icons/chips-fill.svg?v=ef104c73601e4a9661c56b9d978a67c448482d1737dc40af4225a3444c1c9a8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
