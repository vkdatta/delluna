export const name="egg";
export const id="dl_50f53e773ecc4bdc8bd0";
export const url=new URL("../icons/egg.svg?v=b7f42101f6c2da2c151c4d9d2c9026ca4ad8194326714eb5499d0182c30cb184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
