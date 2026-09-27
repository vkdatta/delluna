export const name="cast_pause-fill";
export const id="dl_961951df2747ec63491e";
export const url=new URL("../icons/cast_pause-fill.svg?v=b772a60e5c0dfa8011717f92e385251684ba1f0ce914efb5a332bf74fd3cdaa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
