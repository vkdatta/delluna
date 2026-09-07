export const name="solar-panel";
export const id="dl_7f05f75359df40309026";
export const url=new URL("../icons/S/solar-panel.svg?v=087d7a1dd2a06b117fb9f449252f5404a3e35daa63e38e542fe728cd6ca28088",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
