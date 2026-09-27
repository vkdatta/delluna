export const name="align-center-horizontal-thin";
export const id="dl_50e921f2747d41969f4e";
export const url=new URL("../icons/align-center-horizontal-thin.svg?v=8d0cddcb3d2ae1927a02b2e7f8b4b79d67892cfe331fabf6341efd00334e3b2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
