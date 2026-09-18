export const name="jewelry";
export const id="dl_57cb0f044b064ea6a54f";
export const url=new URL("../icons/jewelry.svg?v=945cc7984f3117cf3c216cd5bb3866c5c095ceed3d36cd69fcabbc7a95367c1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
