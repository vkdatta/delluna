export const name="caret-double-up-fill";
export const id="dl_fccf6740c86f45c29ec1";
export const url=new URL("../icons/caret-double-up-fill.svg?v=2ca6c8dd195f062c2290babfe30b3b5edf6d07baa3d0645ecd7b3fc0001c468b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
