export const name="splitscreen_bottom-fill";
export const id="dl_f31987cfcf1f4f18959b";
export const url=new URL("../icons/splitscreen_bottom-fill.svg?v=09f5f823604157b1bde240ccc41c9126cce393c178cf15933dc104948680f628",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
