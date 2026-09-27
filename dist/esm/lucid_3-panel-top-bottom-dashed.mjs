export const name="lucid_3-panel-top-bottom-dashed";
export const id="dl_f414ff825a9d4b9d8656";
export const url=new URL("../icons/lucid_3-panel-top-bottom-dashed.svg?v=a4e6b0f640aaa41be7373a4c131111ed28ae9b97d06ea6e8aa8a847113b370a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
