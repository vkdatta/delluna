export const name="toys-fill";
export const id="dl_5217901d6daa573c7f59";
export const url=new URL("../icons/toys-fill.svg?v=bbb18d73debb248f75fc665960c8826c0e967d2577300d2e73eb40f870f4db91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
