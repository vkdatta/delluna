export const name="text-align-left-duotone";
export const id="dl_12e4546139e22a2bdba9";
export const url=new URL("../icons/text-align-left-duotone.svg?v=9ab42ecc53ff76714db71da1f4d75cce07b3ff760c4906dfb1d1d3aab36563d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
