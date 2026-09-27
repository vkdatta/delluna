export const name="user-circle-minus-fill";
export const id="dl_39b577fecb5ce9926ba0";
export const url=new URL("../icons/user-circle-minus-fill.svg?v=4934561bb4fa5fe3d63580b73338ae1bc8fbd13f29158e5015ba9af6b95d5f73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
