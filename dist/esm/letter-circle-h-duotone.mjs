export const name="letter-circle-h-duotone";
export const id="dl_12ecc8c56d7d485a8c9b";
export const url=new URL("../icons/letter-circle-h-duotone.svg?v=9865ea3a0ff47e1eb653628f84f9ffcdc59b6186d007fa25588e245034662b08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
