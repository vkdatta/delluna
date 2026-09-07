export const name="lucid_3-package-2";
export const id="dl_85c4136aa40f4b6b8211";
export const url=new URL("../icons/lucid_3-package-2.svg?v=1fb34dd66ce9a50f611c51e25319e571eb42dd13a914c7ccd07b0140b1142265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
