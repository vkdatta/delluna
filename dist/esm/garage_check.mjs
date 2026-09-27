export const name="garage_check";
export const id="dl_cff7bd4d997d17c2c283";
export const url=new URL("../icons/garage_check.svg?v=440638c7c0be4a2a797eef9293043bdefa54263f31d8947b623b53492ef1f89b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
