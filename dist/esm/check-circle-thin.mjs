export const name="check-circle-thin";
export const id="dl_9f397684c7f34ae6b59b";
export const url=new URL("../icons/check-circle-thin.svg?v=004f12f39ae8fb7966d01564d9fbb156a7635506e9ad68ef18bf3d8059fe991b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
