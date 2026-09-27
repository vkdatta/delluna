export const name="speaker_2";
export const id="dl_a34fc3d31928df52358f";
export const url=new URL("../icons/speaker_2.svg?v=170d656a8c261e65aa08ed87db9882147505865fcad340721e874889193acd3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
