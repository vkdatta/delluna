export const name="smiley-wink-fill";
export const id="dl_ab8f6ecef4ffc6fc97e3";
export const url=new URL("../icons/smiley-wink-fill.svg?v=685cc8045c203a14294dd5ef06689b103505d66da5788720f56a8be9cd7892db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
