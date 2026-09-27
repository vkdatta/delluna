export const name="ev_shadow_add-fill";
export const id="dl_1b710e6e3831c6fffffe";
export const url=new URL("../icons/ev_shadow_add-fill.svg?v=919e6e151e3861024a838c3fad3db4d92f79b919297f3fc0cee0c3e9dc09b15a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
