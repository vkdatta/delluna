export const name="feedback-fill";
export const id="dl_7f477a3e9fc91f5e42b6";
export const url=new URL("../icons/feedback-fill.svg?v=5bba937ce7885885ada1100f42f33c64606ef60be9e31ee208f1ba4b3782bf6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
