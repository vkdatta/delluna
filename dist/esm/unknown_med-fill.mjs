export const name="unknown_med-fill";
export const id="dl_513eb638129b4917bb23";
export const url=new URL("../icons/U/unknown_med-fill.svg?v=d2046a28f49bff9623626d91b4b2e0e91f3348bf9302f3b382886a61241170c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
