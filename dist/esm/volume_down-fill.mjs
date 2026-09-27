export const name="volume_down-fill";
export const id="dl_5eead226e251fba8f72e";
export const url=new URL("../icons/volume_down-fill.svg?v=6bdb49cc3cdf62628cf46938eef9f3fdd13caaee100f1ca10cc1ec3835b4fa7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
