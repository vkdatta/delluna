export const name="microphone-stage-light";
export const id="dl_358f698b3e75433fa121";
export const url=new URL("../icons/microphone-stage-light.svg?v=f05f1d3e5b4a5cfa90e2a1f22356f1cd42be04be9e62b910f66cb9d0e6a1efd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
