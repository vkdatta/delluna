export const name="select-fill";
export const id="dl_19ab13e890171416ef86";
export const url=new URL("../icons/select-fill.svg?v=1ac37ff254a03a4e56693e3f354cf9366290b6799e6683bab3605b3e771596a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
