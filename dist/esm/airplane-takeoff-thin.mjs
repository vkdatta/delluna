export const name="airplane-takeoff-thin";
export const id="dl_335695924eac4f38815a";
export const url=new URL("../icons/airplane-takeoff-thin.svg?v=b4ff5c07e32db4845b389e3d8718286866f854ae4bc2d20b2f03ce4569e974c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
