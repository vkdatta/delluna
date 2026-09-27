export const name="train-light";
export const id="dl_f49cd412402856794845";
export const url=new URL("../icons/train-light.svg?v=09392be1a0677f9231d4122723bd4c2644136882717e8724a31d16eb8e9fe478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
