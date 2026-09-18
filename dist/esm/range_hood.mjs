export const name="range_hood";
export const id="dl_b8cdcfac58f54f4ea753";
export const url=new URL("../icons/range_hood.svg?v=db4fcb5704260fea71ff035b59bf22077da4a26c9c75313ebb6fa159447e908e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
