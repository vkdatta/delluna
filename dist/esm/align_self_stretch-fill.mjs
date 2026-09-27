export const name="align_self_stretch-fill";
export const id="dl_2f7c73f7003bcecd5d8b";
export const url=new URL("../icons/align_self_stretch-fill.svg?v=e097e041978c0f6699cc2954bad51d90af32052f5f3f7286644585ec100fc613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
