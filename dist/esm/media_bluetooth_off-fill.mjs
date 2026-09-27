export const name="media_bluetooth_off-fill";
export const id="dl_b6bd02baa85f3f6bfd09";
export const url=new URL("../icons/media_bluetooth_off-fill.svg?v=aa8a92eb22070e61d062aa531c4654c7f80f8016cf993913fdad93128b51ff25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
