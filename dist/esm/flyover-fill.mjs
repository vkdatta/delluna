export const name="flyover-fill";
export const id="dl_668b87d9af27447c9062";
export const url=new URL("../icons/flyover-fill.svg?v=3ffaf2d3123a88962db7c2a4c50cc9205f5f5f05485de7c7e3a8baf15e2b3b80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
