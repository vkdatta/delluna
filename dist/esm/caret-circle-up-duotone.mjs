export const name="caret-circle-up-duotone";
export const id="dl_0800cd06833147e7893c";
export const url=new URL("../icons/caret-circle-up-duotone.svg?v=961e8008118922006086693579fd3349cc54f231e225dce3d0d36e19518990fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
