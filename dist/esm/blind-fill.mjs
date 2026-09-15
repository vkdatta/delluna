export const name="blind-fill";
export const id="dl_fdeeb959248c465586d4";
export const url=new URL("../icons/B/blind-fill.svg?v=9fc1e01377c79b42156caa9e8d303606d8779237baf832ff2e42e30f02401ec6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
