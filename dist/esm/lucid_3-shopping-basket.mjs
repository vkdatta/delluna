export const name="lucid_3-shopping-basket";
export const id="dl_af733b8082884e3d89fe";
export const url=new URL("../icons/lucid_3-shopping-basket.svg?v=e35323f4a633c28328a4cd2365fe3fba05eba969fe743bb4d3870ca3ecd0ff8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
