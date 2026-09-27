export const name="seal-percent-thin";
export const id="dl_4b18f5fba0753da7e41f";
export const url=new URL("../icons/seal-percent-thin.svg?v=dc30bf3f07493e16bb4b5a77c57c349fa894bd72d4f621786d254506e274cd9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
