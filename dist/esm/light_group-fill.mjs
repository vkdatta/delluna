export const name="light_group-fill";
export const id="dl_5df1624721e4be3fc522";
export const url=new URL("../icons/light_group-fill.svg?v=8307c2d8cb8b0a99bc48ac47fe1c367937c598e6d108ecf1717e6b09b36817ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
