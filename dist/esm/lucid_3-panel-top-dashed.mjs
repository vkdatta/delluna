export const name="lucid_3-panel-top-dashed";
export const id="dl_43f0b19198524b74b95b";
export const url=new URL("../icons/lucid_3-panel-top-dashed.svg?v=892e2e09239af91445b3b14a2c130ec23622d7b9c369d745ca0a227f6fbc314a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
