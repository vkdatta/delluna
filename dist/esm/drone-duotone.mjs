export const name="drone-duotone";
export const id="dl_a6cb7e654ef1471080bd";
export const url=new URL("../icons/drone-duotone.svg?v=2b8faaa4d6a954f5e09081f84cfddba1bdda22ced12b28d7fa6a4400db700157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
