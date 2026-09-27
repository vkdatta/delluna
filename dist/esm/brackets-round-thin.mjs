export const name="brackets-round-thin";
export const id="dl_9094f072c93242a9a6e8";
export const url=new URL("../icons/brackets-round-thin.svg?v=179ddc6631d49078b5926290df7cbce8ea3d5bb266d137ae7dffac96e993e037",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
