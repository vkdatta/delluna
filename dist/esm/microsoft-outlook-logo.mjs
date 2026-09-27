export const name="microsoft-outlook-logo";
export const id="dl_4c22625dccd1470d8446";
export const url=new URL("../icons/microsoft-outlook-logo.svg?v=2735a242ae942a9d95847b4a2151b1f813a1cf267107909cbbcf45e378c997ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
