export const name="do_not_step-fill";
export const id="dl_d3ffc8fc81dc5213e56f";
export const url=new URL("../icons/do_not_step-fill.svg?v=93336d94500070fa0ab3f776a5c904d4e33e24c482bc79a3f1bcf4846c725986",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
