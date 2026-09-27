export const name="arrow-bend-left-down-light";
export const id="dl_517f9815ddfd4dbba244";
export const url=new URL("../icons/arrow-bend-left-down-light.svg?v=7a4d30400a39cd14439b90d2cc4dce0379003947f069d32b2322dd258007fa56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
