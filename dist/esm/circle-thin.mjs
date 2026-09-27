export const name="circle-thin";
export const id="dl_a59656e84a9f484dbd98";
export const url=new URL("../icons/circle-thin.svg?v=f605762c295dc932ecf436d3f70eba851237874ebe6c8a3b9a0a61ab4b699a31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
