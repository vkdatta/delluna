export const name="arrows-in-thin";
export const id="dl_04d5d06758ee42c98c8e";
export const url=new URL("../icons/arrows-in-thin.svg?v=e938aac7de3c0256d3b4cbbad4ba98ad2482acdd234091d59e7c3acea748c265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
