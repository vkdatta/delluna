export const name="lab_panel-fill";
export const id="dl_acc33adfd55de9683eb4";
export const url=new URL("../icons/lab_panel-fill.svg?v=229c6d7f1770edfd2c8a2b7b426074f5f3d487312c095d4ff5fed9e0bacf03f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
