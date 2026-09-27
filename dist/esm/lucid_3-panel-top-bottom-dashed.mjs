export const name="lucid_3-panel-top-bottom-dashed";
export const id="dl_f414ff825a9d4b9d8656";
export const url=new URL("../icons/lucid_3-panel-top-bottom-dashed.svg?v=20acb3c080931c11c518da22b54aee2673e1ac0ff4ab84d7a8cc4c4052f436ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
