export const name="bluetooth-duotone";
export const id="dl_c69d296737be40ef8d05";
export const url=new URL("../icons/bluetooth-duotone.svg?v=4bc695c115d960f8bc7e1ea5924871e02046ae3b86ba2e60c8f2bd6ecf38e54b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
