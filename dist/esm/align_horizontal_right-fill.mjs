export const name="align_horizontal_right-fill";
export const id="dl_7b21ab62eaef42a2a6a2";
export const url=new URL("../icons/align_horizontal_right-fill.svg?v=bfb444154586b4fca4d437da2e0574a302ed8352d3ac8b61a6b90bc83400487a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
