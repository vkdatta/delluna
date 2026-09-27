export const name="messenger-logo-duotone";
export const id="dl_053dde2f7eba4afa92c3";
export const url=new URL("../icons/messenger-logo-duotone.svg?v=26a632dd6c8e7fe85b85024598b3fc4077a7f280f38630ea99ea0274eabb4599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
