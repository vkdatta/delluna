export const name="unknown_med-fill";
export const id="dl_d7eb947fa38baa22cd5b";
export const url=new URL("../icons/unknown_med-fill.svg?v=d2046a28f49bff9623626d91b4b2e0e91f3348bf9302f3b382886a61241170c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
