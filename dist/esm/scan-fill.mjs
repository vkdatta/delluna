export const name="scan-fill";
export const id="dl_b731d2187c2a1a1aea77";
export const url=new URL("../icons/scan-fill.svg?v=cf272ec05c92b6f260b4249de3d4f6e76214c3d988c89f84c74fa68be97c38b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
