export const name="mobile_3";
export const id="dl_c055763af42cbeb3a23a";
export const url=new URL("../icons/mobile_3.svg?v=d5288be16346b849f91c01c0a0c8a9e72a158d6acabc4dde2d53a20f1430f2d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
