export const name="user-circle-plus-light";
export const id="dl_54ace0c97d0d5062cefa";
export const url=new URL("../icons/user-circle-plus-light.svg?v=7af4cf09041593b57c4eb97959c925ab51d25ffd3e23ddc61a39ecd834a04fa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
