export const name="two_pager";
export const id="dl_55a15a5030a349ee9e13";
export const url=new URL("../icons/T/two_pager.svg?v=4849a4c26953fa1040dc7ed19d32e23fdb5d8a5316c5bde514e22e18ee1917ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
