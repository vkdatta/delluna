export const name="playground-fill";
export const id="dl_1c87c306fce81ecf5025";
export const url=new URL("../icons/playground-fill.svg?v=eb45b95b886f4d1b283c0f70f90b49346e198fe932e77b415e8dc0a34993b887",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
