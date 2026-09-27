export const name="microscope-duotone";
export const id="dl_258774127ed648c5bc10";
export const url=new URL("../icons/microscope-duotone.svg?v=bcd410233bec63846217999d57f95337980dfa2ec4e2a3251da91b8770008318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
