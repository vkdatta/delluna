export const name="number-circle-eight-fill";
export const id="dl_971d7e8cd15548a7b21e";
export const url=new URL("../icons/number-circle-eight-fill.svg?v=78e76617c8f24dd9ada32fe2842a8b07b80533eb49d52f92e21b0a483090dea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
