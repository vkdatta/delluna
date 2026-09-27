export const name="escalator-down-light";
export const id="dl_eaaea045eb184cd3a0c6";
export const url=new URL("../icons/escalator-down-light.svg?v=a75b48b0a023b462d0d9effc42d15341ebb145fc024daa85c745e311a8d7a822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
