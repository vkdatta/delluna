export const name="microphone-stage-bold";
export const id="dl_800394a330f44ff8876d";
export const url=new URL("../icons/microphone-stage-bold.svg?v=4ca67bba51ac6d76ffc3149b4debb70d985925c0016d57047dfd980578fbba34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
