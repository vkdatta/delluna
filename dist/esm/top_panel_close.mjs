export const name="top_panel_close";
export const id="dl_98df36c65eb24b339ea5";
export const url=new URL("../icons/T/top_panel_close.svg?v=ee14898bb9f1190d8d7799bc7238e2c37588bb1f51becf62d713d91d22b99332",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
