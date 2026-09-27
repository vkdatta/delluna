export const name="faders-duotone";
export const id="dl_4ad9ec034fdf42b9af71";
export const url=new URL("../icons/faders-duotone.svg?v=762a84cdbfe5573714b828877bb798973f255942ba833cda35caa5d4b03ff9da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
