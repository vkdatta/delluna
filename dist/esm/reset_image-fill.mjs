export const name="reset_image-fill";
export const id="dl_16ea32ef3d30dcfb0d4d";
export const url=new URL("../icons/reset_image-fill.svg?v=8190894314283c58f232c45da9c2b817fbc600bfa6d7ae6399de0a6898d75ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
