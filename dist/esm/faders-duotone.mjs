export const name="faders-duotone";
export const id="dl_4ad9ec034fdf42b9af71";
export const url=new URL("../icons/faders-duotone.svg?v=4509684502b08652dd133f62d2fa3d3bc716e15f04886533a2012c0d50b1e707",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
