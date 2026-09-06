export const name="lightning-fill";
export const id="dl_436113205fa24ad4bd0d";
export const url=new URL("../icons/lightning-fill.svg?v=024d190cc1ce86eb59184eb7a598604ad28946248243fbc0cf07b9887babf88d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
