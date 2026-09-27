export const name="asclepius-thin";
export const id="dl_1ca19909781b45ccb83f";
export const url=new URL("../icons/asclepius-thin.svg?v=3ac39119605291edc24bc3e2efd2a6609d027edda485dee8258f2256179094a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
