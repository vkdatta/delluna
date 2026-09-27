export const name="skip-back-duotone";
export const id="dl_a3fffee67c9c61707075";
export const url=new URL("../icons/skip-back-duotone.svg?v=a9daeb952a5db67ebd3ee48edf5c7b23cefe939ca85527fc161bc9eb17e3e59e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
