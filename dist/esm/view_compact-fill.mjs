export const name="view_compact-fill";
export const id="dl_ac8b08926823663dfe04";
export const url=new URL("../icons/view_compact-fill.svg?v=3928f0cd7c910a94276866f993c5552b82017b7f8964642e81ea9ab5a3ef7418",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
